const express = require('express')
const router = express.Router()
const organization = require('./organization')
const empleyee = require('./employee')

//Ruta de register y login
router.use('/organization', organization);

//Ruta de añadir, buscar y vincular empleados a la organizacion y a los datos del covid 
router.use('/employee', empleyee)

module.exports = router