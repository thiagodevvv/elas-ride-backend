const bcrypt =  require('bcrypt');
const jwt = require('jsonwebtoken');
const { execQueryFindUser } = require('../database/queries');

class User {
    Sign(res, data) {
        if(!data.login && !data.password && data.typeUser) {
            res.status(404).send('Favor preencher todos campos');
        }
        if(data.typeUser == 1) {
            const sql = `SELECT * FROM Passageiras where cpf = ${data.login};`
            execQueryFindUser(res, sql, data.password);
        }
        if(data.typeUser == 2) {
            const sql = `SELECT * FROM Motoristas where cpf = ${data.login};`
            execQueryFindUser(res, sql, data.password);
        }
    }
}



module.exports = new User;