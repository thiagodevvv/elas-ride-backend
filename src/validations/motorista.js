const crudMotorista = require('../crud/motorista');
const Validate = require('../../common/validateCpf');


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
        if(isValidCPF) {
            console.log('O CPF É VALIDO PO')
        }

        // Validar Veiculo

        //Se validação OK, chamar Crud pra adicionar dados
        if(true) {
            crudMotorista.signup(res, "data");
        }
        // res.status(200).send('Chamou Motorista Validations');
    }
}


module.exports = new Motorista;