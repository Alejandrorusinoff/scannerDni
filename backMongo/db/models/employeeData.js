const mongoose = require('mongoose')


const EmployeeDataScherma = new mongoose.Schema({
    organizationId: [
        { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Organization' 
        }
    ],
    covidData: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CovidEmployeeData',
    },
    photo: {
        type: String,
        /* required: true, */
    },
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    dni: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: String,
        required: true
    },
    diretion: {
        type: String,
        required: true,
    },
    organizationName: {
        type: String,
        required: true
    },
    dataCovid: [
        { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'CovidEmployeeData' 
        }
    ],
    date: { 
        type: String, 
        default: new Date().toLocaleDateString(), 
    },
    hour: {
        type: String,
        default: new Date().toLocaleTimeString()
    }
})

const EmployeeData = mongoose.model('EmployeeData', EmployeeDataScherma)

module.exports = EmployeeData