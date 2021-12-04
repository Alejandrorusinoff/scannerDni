const Sequelize = require("sequelize");

const db = new Sequelize('postgres://alejandro@localhost/scannerdni', {
    logging: false, // saca el console.log a todas las consultas
    dialect: "postgres"
}) 

module.exports = db;