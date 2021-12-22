const EmployeeData = require('../db/models/employeeData')
const CovidEmployeeData = require('../db/models/covidEmpleyeeData')
const RegisterHour = require('../db/models/registerHour')
const Organization = require('../db/models/organization')
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");

module.exports = {
    //Añadir gente
    addEmployee: function(req, res) {
        const {name, lastName, dni, age, diretion, organizationName, hourIn, firmIn, organizationId} = req.body
        EmployeeData.findOne({where: {dni}})
        .then(empleyee => { 
            console.log(Object.keys(Organization.prototype))
            if(!empleyee) {
                Organization.findByPk(organizationId)
                .then(organization => {
                    EmployeeData.create({name, lastName, dni, age, diretion, organizationName, hourIn, firmIn})
                    .then(people => {
                        people.setOrganization(organization)
                        organization.addEmployeeData(people)
                        people.save()
                        organization.save()
                        res.send({msj:'Usuario creado',user: people})
                    })
                })
            }
            else{res.json(empleyee)}
        })
        .catch(err => res.status(500).json(err))
    },

    //Buscar gente por dni
    searchEmployeeDNI: function(req, res) {
        const {dni} = req.body
        EmployeeData.findOne({where: {dni}})
        .then(user => {
            if(!user){res.json('Usuario no existe')}
            else {
                res.json(user)
            }
        })
    },

    //Ingresar datos de covid del empleado
    covidData: function(req, res) {
        const{ dni, temperature, smell, taste, cough, soreThroat, breathe, diarrhea, vomits, musclePain, peopleCovid, cancer, diabetes, liverDisease, chronicIllness, respiratoryDisease, heartDisease, lowDefenses, empleyeeId } = req.body

        //Buscamos el empleado
        EmployeeData.findOne({where: {dni}})
        .then(people => {
            if (people) {
                //Agregamos datos del covid al empleado buscado
                /* console.log(Object.keys(EmployeeData.prototype)) */
                CovidEmployeeData.create({
                    temperature, smell, taste, cough, soreThroat, breathe, diarrhea, vomits, musclePain, peopleCovid, cancer, diabetes, liverDisease, chronicIllness, respiratoryDisease, heartDisease, lowDefenses
                })
                .then(dataCovidEmployee => {
                    dataCovidEmployee.setEmployeeDatum(people)
                    people.addCovidEmployeeData(dataCovidEmployee)
                    dataCovidEmployee.save()
                    res.json({msj:`Datos del covid cargados al usuario ${people.name}`, dataCovidEmployee})
                })
                .catch(err => res.json(err))
            }
        })
    },

    //Ingresar hora de entrada
    registerHour: function(req, res) {
        const {hourIn, firmIn} = req.body
        RegisterHour.create({hourIn, firmIn})
        .then(registerIn=> res.json(registerIn))
        .catch(err => res.json(err))
    },

    //Ingresar hora de salida
    registerHour: function(req, res) {
        const {hourOut, firmOut} = req.body
        RegisterHour.create({hourOut, firmOut})
        .then(registerOut=> res.json(registerOut))
        .catch(err => res.json(err))
    },

    allEmployee: function (req, res) {
        EmployeeData.findAll()
        .then(peopleAll => res.json(peopleAll)
        )
    },

    //Busca todos los datos de covid del empleado
    searchAllEmployeeCovidData: function (req, res) {
        CovidEmployeeData.findAll({
            where: {employeeDatumId: req.params.idEmpleyee}})
        .then(allDataCovid => res.json(allDataCovid)) 
        .catch(err => res.json(err))
    },

    //Buscar un dato particular de covid del empleado
    searchEmployeeCovidData: function (req, res) {
        CovidEmployeeData.findByPk(req.params.idData)
        .then(dataCovidEmployee => res.json(dataCovidEmployee))
        .catch(err => res.json(err))
    }
}


