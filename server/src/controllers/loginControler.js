const connection = require('../models/conecction')

module.exports.login = (req, res) => {
    const { username, password } = req.body;
    const consult = 'SELECT * FROM login WHERE username = ? AND password = ?';

    try {
        connection.query(consult, [username, password], (err, result) => {
            if (err) {
<<<<<<< HEAD
                res.send({message: 'Error de user/pass'});
                res.send(err);
=======
                console.error(err);
                return res.send({message: 'Error de user/pass', error: err});
>>>>>>> 3fc5314f94cd674f22fdea2ac71f7d803af93f9d
            }

            if (result.length > 0) {
                console.log('Bienvenido!');
                console.log(result);
                return res.send({message: 'Bienvenido!', result: result});
            } else {
                console.log('Usuario o contraseña incorrectos');
                return res.send({message: 'Usuario o contraseña incorrectos'});
            }
<<<<<<< HEAD

            });

        } catch (e) {  

=======
        });
        } catch (e) {  
>>>>>>> 3fc5314f94cd674f22fdea2ac71f7d803af93f9d
    }
}

