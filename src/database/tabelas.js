class Tabelas {

    init(connectDB) {
        this.connectDB = connectDB;
        this.createPassageiras();
        this.createEndereco();
    }

    createTable(sql) {
        this.connectDB.query(sql, err => {
            if(err) {
                console.log(`Erro ao criar tabela ${err}`);
            }
        });
    }

    createPassageiras() {
        const sql = 'CREATE TABLE IF NOT EXISTS Passageiras (id int NOT NULL AUTO_INCREMENT, nome varchar(150) NOT NULL, cpf varchar(11) NOT NULL, password varchar(300) NOT NULL, PRIMARY KEY (id));'
        this.createTable(sql);
    }

    createEndereco() {
        const sql = 'CREATE TABLE IF NOT EXISTS Endereco (id int NOT NULL AUTO_INCREMENT, rua varchar(150) NOT NULL, cep varchar(10) NOT NULL, numero varchar(20) NOT NULL, bairro varchar(100) NOT NULL, userid int NOT NULL, PRIMARY KEY (id));'
        this.createTable(sql);
    }
}


module.exports = new Tabelas;