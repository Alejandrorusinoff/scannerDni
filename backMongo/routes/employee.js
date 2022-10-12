const express = require('express')
const router = express.Router()
const peopleController = require('../controllers/peopleController')
const checkJWT = require("../middlewares/jwt");

//Añadir empleado a la organización
router.post('/add', checkJWT, peopleController.addEmployee)

//Buscar empleados que pertenecen a la organizacion
router.post('/organizationEmployee', checkJWT, peopleController.organizationEmployee)

//Vincula a los empleados a la organizacion
router.post('/associateEmployee', checkJWT, peopleController.associateEmployee)

//Buscar todos los empleados
router.get('/searchAllEmployees', /* checkJWT, */ peopleController.allEmployee)

//Buscar empleado por DNI
router.post('/searchEmployeeByDNI', checkJWT, peopleController.searchEmployeeDNI)

//Añadir datos de covid del empleado 
router.post('/covidData', checkJWT, peopleController.covidData)

//Busca todos los datos de covid del empleado (añadir token)
router.get('/searchAllEmployeeCovidData/:idEmployee',checkJWT, peopleController.searchAllEmployeeCovidData)

//Busca un dato particular de covid del empleado
router.get('/searchEmployeeCovidData/:idData', checkJWT, peopleController.searchEmployeeCovidData)

//Buscar datos de covid de un empleado dentro de una empresa
router.post('/searchCovidDataEmployeeAndCompany', checkJWT, peopleController.searchCovidDataEmployeeAndCompany)

//Edita la foto de un empleado
router.put('/editEmployee/:dni', checkJWT, peopleController.editEmployee)

// //Registro de hora de entrada y salida
// router.post('/registerHour',checkJWT, peopleController.registerHour)

module.exports = router