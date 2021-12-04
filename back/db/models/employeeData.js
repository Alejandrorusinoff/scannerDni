const {Sequelize, DataTypes, Model} = require('sequelize')
const db = require('../index')

class EmployeeData extends Model {}
EmployeeData.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dni: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    age: {
        type: DataTypes.STRING,
        allowNull: false
    },
    diretion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    organizationName: {
        type: DataTypes.STRING,
        allowNull: false
    },
},
{
    sequelize: db, 
    modelName: 'employeeData'
})

module.exports = EmployeeData