const express = require('express');
const router = express.Router();
const { ping } = require('../controllers/pingController');

router.get('/ping', ping);

//Tenemos que exportar nuestro modulo para que pueda ser utilizado en otro archivo
module.exports = router;