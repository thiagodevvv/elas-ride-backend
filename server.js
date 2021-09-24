require('dotenv').config();

const customExpress = require('./config/customExpress');
const connectDB = require('./config/connectDB');
const Tabelas = require('./src/database/tabelas')
const app = customExpress();
const PORT = 3000;

connectDB.connect(err => {
    if(err) {
        console.log(`Erro ao se conectar na base de dados no server ${err}`);
    }
    console.log('Connect in Database!');
    Tabelas.init(connectDB);
})

app.listen(PORT, () => {
    console.log(`Server started in port:: ${PORT}`);
});
