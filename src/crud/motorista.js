const {execQueryMotorista} = require('../database/queries');

class Motorista {
    signup(res, data) {
        const sqlMotorista = `INSERT INTO Motoristas(nome, cpf, cnh, validade_cnh, password) VALUES('${data.nome}', '${data.cpf}','${data.cnh}','${data.validade_cnh}', '${data.password}')`
        const endereco = {
            rua: data.rua,
            cep: data.cep,
            numero: data.numero,
            bairro: data.bairro,
        }
        const veiculo = {
            renavam: data.renavam,
            placa: data.placa,
            ano: data.ano,
            modelo: data.modelo,
            marca: data.marca
        }
        execQueryMotorista(res, sqlMotorista, endereco, veiculo);
    }
}



module.exports = new Motorista;
