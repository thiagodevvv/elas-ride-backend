const crudMotorista = require('../crud/motorista');
const Validate = require('../../common/validateCpf');
const ValidateMotorista = require('../../common/validateMotorista');
const utils = require('../../common/utils');


class Motorista {
    validations(res, data) {
    
        if(data.cpf.length > 11) {
            return res.status(400).send('CPF maior que 11 digitos');
        }
        const isValidParams = utils.validateFieldsBodyMotorista(data);

        if(isValidParams.status == 200) {
            const isValidCPF = Validate.cpf(data.cpf);
            const isValidCnh = ValidateMotorista.cnh('e2342432432');
            const isValidVeiculo = ValidateMotorista.veiculo('324098294', 'FAR8990');

            if(isValidCPF && isValidCnh && isValidVeiculo) {
                crudMotorista.signup(res, "data");
            }else {
                return res.status(400).send('Dados incorretos');
            }
            
        }else {
            res.status(400).send({
                message: 'Campos incompletos',
                fileds: isValidParams.fields
            })
        }
    }
}


module.exports = new Motorista;