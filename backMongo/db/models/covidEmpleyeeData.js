const mongoose = require('mongoose')

const CovidEmployeeDataScherma = new mongoose.Schema({
    employeeId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'EmployeeData' 
    },
    organizationId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Organization' 
    },
    temperature: {
        type: Number,
        required: true
    },
    smell: {
        type: String,
        required: true
    },
    taste: {
        type: String,
        required: true
    },
    cough: {
        type: String,
        required: true
    },
    soreThroat: {
        type: String,
        required: true
    },
    breathe: {
        type: String,
        required: true
    },
    diarrhea: {
        type: String,
        required: true
    },
    headache: {
        type: String,
        required: true
    },
    vomits: {
        type: String,
        required: true
    },
    musclePain: {
        type: String,
        required: true
    },
    peopleCovid:{
        type: String,
        required: true
    },
    lastDaysPeople:{
        type: String,
        required: true
    },
    cancer:{
        type: String,
        required: true
    },
    diabetes:{
        type: String,
        required: true
    },
    liverDisease:{
        type: String,
        required: true
    },
    chronicIllness:{
        type: String,
        required: true
    },
    respiratoryDisease:{
        type: String,
        required: true
    },
    heartDisease:{
        type: String,
        required: true
    },
    lowDefenses:{
        type: String,
        required: true
    },
    date: { 
        type: String, 
        default: new Date().toLocaleDateString(), 
    },
    hour: {
        type: String,
        default: new Date().toLocaleTimeString()
    }
})

const CovidEmployeeData = mongoose.model('CovidEmployeeData', CovidEmployeeDataScherma)

module.exports = CovidEmployeeData


