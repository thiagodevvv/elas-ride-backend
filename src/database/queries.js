const bcrypt =  require('bcrypt');
const jwt = require('jsonwebtoken');
const connectDB = require('../../config/connectDB');

const execQuery = (res, sql, endereco = null) => {
    console.log(endereco)
    connectDB.query(sql, (err, results) => {
        if(err) {
            res.json(err);
        } else {
            console.log('Executou query...');
            const sqlEndereco = `INSERT INTO Endereco(rua, cep, numero, bairro, userid) VALUES('${endereco.logradouro}', '${endereco.cep}', '${endereco.numeroCasa}', '${endereco.bairro}', '${results.insertId}')`
            connectDB.query(sqlEndereco,(err, result) => {
                if(err) {
                    console.log('Erro ao criar na tabela endereço');
                    console.log(err)
                }
                const statusOk = {
                    statusOk: "Passageira cadastrada!"
                }
                const data = {...results, ...result, ...statusOk}
                res.json(data);
            })
        }
    })
}

const execQueryMotorista = (res, sqlMotorista, endereco, veiculo) => {
    connectDB.query(sqlMotorista, (err, result) => {
        if(err) {
            res.json(err);
        }else {
            const sqlVeiculo = `INSERT INTO Veiculos(renavam, placa, ano, idMotorista, marca, modelo) VALUES('${veiculo.renavam}', '${veiculo.placa}','${veiculo.ano}','${result.insertId}', '${veiculo.marca}', '${veiculo.modelo}')`
            connectDB.query(sqlVeiculo, (err, results) => {
                if(err) {
                    res.json(err)
                }else {
                    const sqlEndereco = `INSERT INTO Endereco_motorista(rua, cep, numero, bairro, userid) VALUES('${endereco.rua}', '${endereco.cep}','${endereco.numero}','${endereco.bairro}', '${result.insertId}')`
                    connectDB.query(sqlEndereco, (err, resultsFinal) => {
                        if(err) {
                            res.json(err)
                        }else {
                            const statusOk = {
                                statusOk: "Motorista cadastrado com sucesso!"
                            }
                            const succes = {...result, ...results, ...resultsFinal, ...statusOk}
                            res.status(200).send(succes);
                        }
                    })
                }
            })
        }
    })
}

const execQueryFindUser = async (res, sql, password) => {
    connectDB.query(sql, (err, result) => {
        if(err) {
            console.log('erro ao executar query find user')
        }
        if(result.length == 1) {
            bcrypt.compare(password, result[0].password, (err, isMatch) => {
                if(err || !isMatch) {
                    return res.status(404).send('Senha incorreta');
                }
                const payload = {
                    id: result[0].id
                }
                const token = jwt.sign(payload, process.env.secretOrPrivateKey,  { expiresIn: '24h' });

                return res.status(200).send({
                    token: token
                });
            })
        }else {
            res.status(404).send('Usuária passageira não encontrada');
        }
    })
}

module.exports = {
    execQuery,
    execQueryMotorista,
    execQueryFindUser
};

