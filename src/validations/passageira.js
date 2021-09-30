// aqui vamos validar os dados da passageira
const crudPassageira = require('../crud/passageira');
const axios = require('axios');
const bcrypt = require('bcrypt');
const Validate = require('../../common/validateCpf');
const utils = require('../../common/utils');


class Passageira {

    validations(res, data) {
        if(data.cpf.length > 11) {
            res.status(400).send('CPF maior que 11 digitos');
        }
        const isValidParams = utils.validateFieldsBodyPassageira(data);
        if(isValidParams.status == 200) {
            try {
                axios.get(`https://viacep.com.br/ws/${data.cep}/json/`)
                .then((endereco) => {
                    const isValidCPF = Validate.cpf('cpf');
                    if(isValidCPF) {
                       const numeroCasa = { 
                           numeroCasa: data.numero 
                        }
                       bcrypt.hash(data.password, parseInt(process.env.SALT_ROUNDS), (err, hash) => {
                            if(err) {
                                console.log(`Error create hash for password ${err}`);
                            }
                            data.password = hash;
                            const enderecoCompleto = {...endereco.data, ...numeroCasa}
                            crudPassageira.signup(res, data, enderecoCompleto);
                       })
                    }else {
                        return res.status(400).send('CPF Inválido');
                    }
                })
                .catch((err) => {
                    //Não conseguiu pegar CEP.
                    return res.status(400).json(err)
                })                
    
            }catch (err) {
                return res.status(400).json(err)
            }
        }else {
            return res.status(400).send(isValidParams);
        }
    }
}

module.exports = new Passageira; 