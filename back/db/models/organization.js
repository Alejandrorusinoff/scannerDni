const {DataTypes, Model} = require('sequelize')
const db = require('../index')
const bcrypt = require("bcrypt");

class Organization extends Model {}
Organization.init({
    companyName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    companyHeadquartes: {
        type: DataTypes.STRING,
        allowNull: false
    },
    province: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    diretion: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false  
    },
    salt: {
        type: DataTypes.STRING,
    },
},
{
    sequelize: db, 
    modelName: 'organization'
})

Organization.beforeCreate(Organization => {
    return bcrypt.genSalt(10)
    .then(salt => {
        Organization.salt = salt;
        return bcrypt.hash(Organization.password, salt).then(hash => {
            Organization.password = hash
        })
    })  
})

module.exports = Organization

