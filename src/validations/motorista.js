const crudMotorista = require('../crud/motorista');


class Motorista {
    validations(res, data) {

        //validar Veiculo e Motorista F
        //Se validação OK, chamar Crud pra adicionar dados
        if(true) {
            crudMotorista.signup(res, "data");
        }
        // res.status(200).send('Chamou Motorista Validations');
    }
}


module.exports = new Motorista;