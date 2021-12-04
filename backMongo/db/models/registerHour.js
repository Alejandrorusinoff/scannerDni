/* const {Sequelize, DataTypes, Model} = require('sequelize')
const db = require('../index')

class RegisterHour extends Model {}
RegisterHour.init({
    hourIn: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firmIn: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hourOut: {
        type: DataTypes.STRING,
    },
    firmOut: {
        type: DataTypes.STRING,
    },
},
{
    sequelize: db, 
    modelName: 'RegisterHour'
})

module.exports = RegisterHour */