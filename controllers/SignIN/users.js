const User = require('../../src/validations/sign');


module.exports = app => {
    app.post('/sign', (req, res) => {
        User.Sign(res, req.body);
    })
}