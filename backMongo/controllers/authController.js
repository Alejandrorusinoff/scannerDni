const Organization = require('../db/models/organization')
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");

module.exports = {
    //Login
    login: function(req, res) {
        const {email, password} = req.body
        console.log(email, password)
        Organization.findOne({email})
        .then(company => {
            if(!company) res.json("Usuario no encontrado")
            else{
                if(bcrypt.compareSync(password, company.password)) {
                    let token = jwt.sign({company}, 'albondiga', {expiresIn: '7d'})
                    res.json({company, token})
                }
                else{
                    res.json("Password inválido")
                }
            }
        })
        .catch(err => res.status(500).json(err))
    },

    //Register
    register: function(req, res) {
        //creamos el organizacion
        const {companyName, companyHeadquartes, province, location, diretion, description, email, password} = req.body
        Organization.create({companyName, companyHeadquartes, province, location, diretion, description, email, password})
        //creamos el token
        .then(company => {
            let token = jwt.sign({company}, 'albondiga', {expiresIn: '7d'})
            res.json({company, token})
        })
        .catch(err => res.status(500).json(err))
    }
}
