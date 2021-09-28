

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

class Validate {
    cpf(cpf) {
        const response = mockApiCPF('cpf');
        if(response.genero === 'F' && response.situacao_cadastral === 'REGULAR') {
            return true;
        }else {
            return false;
        }
    }
}



module.exports = new Validate;