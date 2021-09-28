// aqui vamos validar os dados da passageira
const crudPassageira = require('../crud/passageira');
const axios = require('axios');
const bcrypt = require('bcrypt');
const Validate = require('../../common/validateCpf');


class Passageira {

    validations(res, data) {
        if(data.cpf.length > 11) {
            res.status(400).send('CPF maior que 11 digitos');
        }
        try {
            axios.get(`https://viacep.com.br/ws/${data.cep}/json/`)
            .then((endereco) => {
                const response = mockApiCPF('cpf');
                if(response.genero === 'F' && response.situacao_cadastral === 'REGULAR') {
                   const numeroCasa = { 
                       numeroCasa: data.n_casa 
                    }
                   bcrypt.hash(data.password, parseInt(process.env.SALT_ROUNDS), (err, hash) => {
                        if(err) {
                            console.log(`Error create hash for password ${err}`);
                        }
                        data.password = hash;
                        const enderecoCompleto = {...endereco.data, ...numeroCasa}
                        crudPassageira.signup(res, data, enderecoCompleto);
                   })
                }
            })
            .catch((err) => {
                //Não conseguiu pegar CEP.
                return res.status(400).json(err)
            })                

        }catch (err) {
            return res.status(400).json(err)
        }
    }
}

module.exports = new Passageira; 