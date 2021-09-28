const Motorista = require('../../src/validations/motorista');


module.exports = app => {
    app.post('/motorista/signup', (req, res) => {
    //    Chamar validação dos documentos do veiculo e Motorista
          Motorista.validations(res, req.body);
    });
}