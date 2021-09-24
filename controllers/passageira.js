const Passageira = require('../src/validations/passageira');

module.exports = app => {
    app.post('/passageira/signup', (req, res) => {
        Passageira.validations(res, req.body);
    });
}