const connectDB = require('../../config/connectDB');


const execQuery = (res, sql) => {
    connectDB.query(sql, (err, results) => {
        if(err) {
            res.json(err);
        } else {
            console.log('Executado query...');
            res.json(results);
        }
    })
}


module.exports = execQuery;