// aqui vamos validar os dados da passageira
const crudPassageira = require('../crud/passageira')

const mockApiCPF = (cpf) => {
    return {
        "code": "0",
        "status": "OK",
        "message": "Pesquisa realizada com sucesso.",
        "cpf": "026.315.210-60",
        "nome": "ISABELLA ALVES",
        "genero": "F",
        "data_nascimento": "13/02/1985",
        "situacao_cadastral": "REGULAR",
        "data_inscricao": "18/05/2001",
        "digito_verificador": "00",
        "comprovante": "93BA.8U8B.6CAA.47F1",
        "version": "2"
    }    
}

class Passageira {
    validations(res, data) {

        if(data.cpf.length > 11) {
            res.status(400).send('CPF maior que 11 digitos');
        }
        const response = mockApiCPF('cpf');
        if(response.genero === 'F' && response.situacao_cadastral === 'REGULAR') {
            crudPassageira.signup(res, data);
        }
    }
}

module.exports = new Passageira; 