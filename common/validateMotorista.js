const mockApiCnh = (cnh) => {
    return {
        isValid: true
    }
}

const mockApiVeiculo = (renavam, placa) => {
    return {
        isValid: true
    }
}


class Validate {

    cnh(numCnh) {

        const response = mockApiCnh(numCnh);
        if(response.isValid) {
            return true;
        }else {
            return false;
        }
    }

    veiculo(renavam, placa) {
        const response = mockApiVeiculo(renavam, placa);
        if(response.isValid) {
            return true;
        }else {
            return false;
        }
    }
}


module.exports = new Validate;