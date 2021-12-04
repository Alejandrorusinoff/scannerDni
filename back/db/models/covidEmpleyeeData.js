const {Sequelize, DataTypes, Model} = require('sequelize')
const db = require('../index')

class CovidEmployeeData extends Model {}
CovidEmployeeData.init({
    temperature: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    smell: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    taste: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    cough: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    soreThroat: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    breathe: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    diarrhea: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    vomits: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    musclePain: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    peopleCovid:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    cancer:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    diabetes:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    liverDisease:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    chronicIllness:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    respiratoryDisease:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    heartDisease:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    lowDefenses:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
},
{
    sequelize: db, 
    modelName: 'CovidEmployeeData'
})

module.exports = CovidEmployeeData


/* "temperature": true,
"smell": true,
"taste": true,
"cough": true,
"soreThroat": true,
"breathe": true,
"arrhea": true,
"vomits": true,
"musclePain": true,
"peopleCovid": true,
"cancer": true,
"diabetes": true,
"liverDisease": true,
"chronicIllness": true,
"respiratoryDisease": true,
"heartDisease": true,
"lowDefenses": true, */