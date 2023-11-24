const connection = require('../models/conecction')

module.exports.login = (req, res) => {
    const { username, password } = req.body;
    const consult = 'SELECT * FROM login WHERE username = ? AND password = ?';

    try {
        connection.query(consult, [username, password], (err, result) => {
            if (err) {
                res.send({message: 'Error de user/pass'});
                res.send(err);
            }

            if (result.length > 0) {
                res.send({message: 'Bienvenido'});
                console.log(result);
                res.json(result);
            } else {
                console.log('Usuario o contraseña incorrectos');
                res.send({message: 'Usuario o contraseña incorrectos'});
            }

            });

        } catch (e) {  

    }
}

