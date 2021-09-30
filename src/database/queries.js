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

module.exports = {
    execQuery,
    execQueryMotorista
};

