const Motorista = require('../../src/validations/motorista');


module.exports = app => {
    app.get('/motorista/signup', (req, res) => {
    //    Chamar validação dos documentos do veiculo e Motorista
          Motorista.validations(res, "data")
    });
}