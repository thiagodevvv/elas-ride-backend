const execQuery = require('../database/queries');

class Passageiras {

    signup(res, dataPassageira, dataEndereco) {
        const sql = `INSERT INTO Passageiras(nome, cpf, password) VALUES('${dataPassageira.nome}', '${dataPassageira.cpf}', '${dataPassageira.password}')`
        execQuery(res, sql, dataEndereco);
    }
}

module.exports = new Passageiras;