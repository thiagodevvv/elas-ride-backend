const axios = require('axios');

describe('Testar controllers', () => {
    it('Teste  de Controller Passageiras Registro', async () => {
        const result = await axios.post('http://localhost:3000/passageira/signup', {
            cpf: "12345612300",
            nome: "Thiago",
            cep: "17032700",
            n_casa: "1-35",
            password: "123"
        })
        expect(result.data.statusOk).toBe("Passageira cadastrada!")
    })
})