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


module.exports = execQuery;