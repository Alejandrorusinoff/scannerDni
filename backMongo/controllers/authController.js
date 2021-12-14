const Organization = require('../db/models/organization')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const bcrypt = require("bcrypt");

module.exports = {
    //Login
    login: function(req, res) {
        const {email, password} = req.body
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
    },

    //Recuperar Contraseña
    editPassword: function (req, res) {
        const {email} = req.body
        Organization.findOne({email})
        .then(company => {
            
            var transporter = nodemailer.createTransport({
                service: 'hotmail',
                auth: {
                  user: 'ale_rusinoff13@hotmail.com',
                  pass: '32068121qd'
                }
            })
            
            var mensaje = "Hola desde nodejs...";
            
            var mailOptions = {
                from: 'ale_rusinoff13@hotmail.com',
                to: email,
                subject: 'Recuperar Contraseña',
                text: mensaje,
                html: '<h1>Ingrese su nueva contraseña!</h1> <input type="text" id="name" name="name" placeholder="Contraseña nueva" ><input type="submit" value="Submit">'
            };
            
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email enviado: ' + info.response);
                }
            });
            res.json('email enviado')
        })
    }
}

