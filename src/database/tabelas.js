class Tabelas {

    init(connectDB) {
        this.connectDB = connectDB;
        this.createPassageiras();
        this.createEndereco();
        this.createMotoristas();
        this.createVeiculos();
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

    createMotoristas() {
        const sql = 'CREATE TABLE IF NOT EXISTS Motoristas (id int NOT NULL AUTO_INCREMENT, nome varchar(150) NOT NULL, cpf varchar(11) NOT NULL, cnh varchar(100) NOT NULL, validade_cnh varchar(10) NOT NULL, password varchar(300) NOT NULL, PRIMARY KEY(id));'
        this.createTable(sql);
    }
    
    createVeiculos() {
        const sql = 'CREATE TABLE IF NOT EXISTS Veiculos (id int NOT NULL AUTO_INCREMENT, renavam varchar(100) NOT NULL, placa varchar(8) NOT NULL, idMotorista int NOT NULL, ano varchar(4) NOT NULL, modelo varchar(30) NOT NULL, marca varchar(50) NOT NULL, PRIMARY KEY (id));'
        this.createTable(sql);
    }

    createEndereco() {
        const sql = 'CREATE TABLE IF NOT EXISTS Endereco (id int NOT NULL AUTO_INCREMENT, rua varchar(150) NOT NULL, cep varchar(10) NOT NULL, numero varchar(20) NOT NULL, bairro varchar(100) NOT NULL, userid int NOT NULL, PRIMARY KEY (id));'
        this.createTable(sql);
    }
}


module.exports = new Tabelas;