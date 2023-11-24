
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '192.168.0.251',
    user: 'root',
    password: 'eclipse',
    database: 'multiview'
});

connection.connect(function (error) {
    if (error) {
        console.log(' -> Error de conexion con la base de datos');
        throw error;
        
    } else {
        console.log(' -> Conexion a la base de datos OK');
        console.log(' -> Backend escuchando por el sig puerto: http://localhost:3000 ');
    }
});

module.exports = { connection };

module.exports = connection;