
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '192.168.0.251',
    user: 'root',
    password: 'eclipse',
    database: 'multiview'
});

connection.connect(function (error) {
    if (error) throw error;
    console.log('Conectado a la base de datos');
});

module.exports = { connection };

module.exports = connection;