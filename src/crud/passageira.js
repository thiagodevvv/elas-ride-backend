const execQuery = require('../database/queries');

class Passageiras {

    signup(res, data) {
        const sql = `INSERT INTO Passageiras(nome, cpf, cep, n_casa, password) VALUES('${data.nome}', '${data.cpf}', '${data.cep}', '${data.n_casa}', '${data.password}')`
        execQuery(res, sql);
    }
}

module.exports = new Passageiras;