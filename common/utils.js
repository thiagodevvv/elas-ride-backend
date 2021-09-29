class Utils {
    validateFieldsBodyMotorista(body) {

        const isRequiredParams = ["nome", "cpf", "cnh", "renavam", "placa", "cep", "rua", "numero", "bairro", "password"].sort();
        const paramsBody = Object.keys(body).sort();
        let missingFields = [];
        isRequiredParams.map((param) => {
            if(paramsBody.indexOf(param) === -1 ) {
                missingFields.push(param)
            }
        })
        if(missingFields.length > 0) {
            return  {
                status: 400,
                message: 'Error, expected fields',
                fields: missingFields
            }
        }else {
            return {
                status: 200
            }
        }
    }

    validateFieldsBodyPassageira(body) {
        const isRequiredParams = ["nome", "cpf", "cep", "rua", "numero", "bairro", "password"].sort();
        const paramsBody = Object.keys(body).sort();
        let missingFields = [];
        isRequiredParams.map((param) => {
            if(paramsBody.indexOf(param) === -1 ) {
                missingFields.push(param)
            }
        })
        if(missingFields.length > 0) {
            return  {
                status: 400,
                message: 'Error, expected fields',
                fields: missingFields
            }
        }else {
            return {
                status: 200
            }
        }
    }
}




module.exports = new Utils;