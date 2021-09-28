const crudMotorista = require('../crud/motorista');
const Validate = require('../../common/validateCpf');
const ValidateMotorista = require('../../common/validateMotorista');


class Motorista {
    validations(res, data) {

        //validar Veiculo e Motorista F
        if(data.cpf.length > 11) {
            return res.status(400).send('CPF maior que 11 digitos');
        }
        if(!data.cpf || !data.renavam || !data.cnh || !data.nome || !data.password) {
            return res.status(400).send('Favor preencher campos do formulário corretamente.');
        }
        // Validar CPF e CNH motorista
        const isValidCPF = Validate.cpf(data.cpf);
    
        // Validar Veiculo
        const isValidCnh = ValidateMotorista.cnh('e2342432432');
        const isValidVeiculo = ValidateMotorista.veiculo('324098294', 'FAR8990');

        if(isValidCPF && isValidCnh && isValidVeiculo) {
            crudMotorista.signup(res, "data");
        } else {
            return res.status(400).send('Dados incorretos');
        }
    }
}


module.exports = new Motorista;