const EmployeeData = require('../db/models/employeeData')
const CovidEmployeeData = require('../db/models/covidEmpleyeeData')
const RegisterHour = require('../db/models/registerHour')
const Organization = require('../db/models/organization')
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");
const mongoose = require('mongoose')

module.exports = {
    //Añadir gente a la organización
    addEmployee: function(req, res) {
        const {/* name, lastName, */ dni/* , age, diretion, organizationName, hourIn, firmIn, organizationId */} = req.body
        EmployeeData.findOne({dni})
        //Busca el empleado dentro de la tabla empleados
        .then(employee => { 
            const {photo, name, lastName, age, diretion, organizationName, organizationId} = req.body
            /* console.log('photo ----> ', photo) */
            console.log(photo,
                name, 
                lastName, 
                dni, 
                age, 
                diretion, 
                organizationName,
                organizationId,)
            //Si no existe el empleado lo crea y lo asocia a la organizacion donde ingresa
            if(!employee) {
                Organization.findOne({_id:organizationId})
                .then(empresa => {
                    EmployeeData.create({organizationId, photo, name, lastName, dni, age, diretion, organizationName})
                    .then(employee => {
                        empresa.employees.push(employee)
                        empresa.save()
                        res.send({msj:'Usuario creado y agregado a la organizacion', employee})
                    })
                }).catch(err => res.json(err))
            }
            //Si existe el empleado hay 2 casos que no este asociado la organizacion o que lo este
            //y no esta asociado a la organizacion lo asocia
            else{
                //empleado no esta vinculado a la organizacion
                Organization.findOne({_id:organizationId})
                .then(empresa => { /* this.associateEmployee(employee, organizationId, empresa) */
                    empresa.employees.push(employee)
                    employee.organizationId.push(empresa)
                    empresa.save()
                    employee.save()
                    res.json({msj: 'Usuario agregado a la organizacion', employee})
                }).catch(err => res.json(err))
            }
        })
        .catch(err => res.status(500).json(err))
    },

    //Buscar gente por dni
    searchEmployeeDNI: function(req, res) {
        const {dni} = req.body
        EmployeeData.findOne({dni})
        .then(user => {
            if(!user){res.json('Usuario no existe')}
            else {   
                res.json(user)
            }
        })
    },

    //Empleados perteneciente a la organizacion
    organizationEmployee: function (req, res) {
        const {organizationId} = req.body
        Organization.findOne({_id:organizationId}).populate('employees')
        .then(employees => res.json(employees))
    },

    //Vincular empleado a la organizacion
    associateEmployee: function (req, res) {
        const { dni, organizationId, idEmployee } = req.body
        EmployeeData.findOne({dni})
        //Busca el empleado dentro de la tabla empleados
        .then(employee => { 
            //vincula al empleado a la organizacion
            Organization.findOne({_id:organizationId})
            .then(empresa => {
                empresa.employees.push(employee)
                employee.organizationId.push(empresa)
                empresa.save()
                employee.save()
                res.json({msj: 'Usuario agregado a la organizacion', employee})
            }).catch(err => res.json(err))  
        })
    },

    //Ingresar datos de covid del empleado lastDaysPeople
    covidData: function(req, res) {
        const{ dni, temperature, smell, taste, cough, soreThroat, breathe, diarrhea, headache, vomits, musclePain, peopleCovid, cancer, diabetes, liverDisease, chronicIllness, respiratoryDisease, heartDisease, lowDefenses, employeeId, organizationId, lastDaysPeople } = req.body
        //Buscamos al empleado por su dni
        EmployeeData.findOne({dni})
        .then(people => {
            /* console.log("people ----> ", people) */
            //Si existe el empleado existe le asigno los datos del covid
            if (people._id) {
                //Agregamos datos del covid al empleado buscado
                CovidEmployeeData.create({
                    employeeId, organizationId, temperature, smell, taste, cough, soreThroat, breathe, diarrhea, headache, vomits, musclePain, peopleCovid, cancer, diabetes, liverDisease, chronicIllness, respiratoryDisease, heartDisease, lowDefenses, lastDaysPeople 
                })
                .then(dataCovidEmployee => {
                    people.dataCovid.push(dataCovidEmployee)
                    people.save()
                    res.json({msj:`Datos de covid cargados al usuario ${people.name} `, dataCovidEmployee})
                })
                .catch(err => res.json(err))
            }
            else{
                res.json('el empleado no existe')
            }
        })
    },

    allEmployee: function (req, res) {
        EmployeeData.find()
        .then(peopleAll => res.json(peopleAll)
        )
    },

    //Busca todos los datos de covid del empleado
    searchAllEmployeeCovidData: function (req, res) {
        EmployeeData.findOne({_id: req.params.idEmployee})
        // esto es lo mismo q esto .populate('dataCovid') = .populate({path:''dataCovid})
        .populate(
            {
                path:'dataCovid',
                populate: {
                    path: 'organizationId',
                    select: 'companyName'
                }
            }
        ) 
        .then(allDataCovid => {
            /* console.log('allDataCovid desde el back ---> ', allDataCovid.toJSON()) */
            res.json(allDataCovid)}) 
        .catch(err => res.json(err))
    },

    //Buscar un dato particular de covid del empleado
    searchEmployeeCovidData: function (req, res) {
        CovidEmployeeData.findById(req.params.idData)
        .then(dataCovidEmployee => res.json(dataCovidEmployee))
        .catch(err => res.json(err))
    },

    //Buscar datos de covid de un empleado dentro de una empresa
    searchCovidDataEmployeeAndCompany: function (req, res) {
        const {employeeId, organizationId} = req.body 
        CovidEmployeeData.find({employeeId, organizationId})
        .then(dataCovid => res.json(dataCovid))
        .catch(err => res.json(err))
    },
    
    //Edita la foto de un empleado
    editEmployee: function (req, res) {
        const dni = req.params.dni
        const {photo} = req.body
        /* console.log('req.params.editEmployee ----> ',dni, photo) */
        EmployeeData.findOneAndUpdate(dni)
        .then(employee => {
            employee.photo = photo,
            /* console.log(employee), */
            employee.save()
            res.json('Foto actualizada')
        })
    }

}
