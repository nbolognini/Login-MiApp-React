const connection = require('../models/conecction')

module.exports.login = (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
}