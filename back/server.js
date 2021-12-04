const express = require('express')
const app = express()
const db = require('./db/index')
const routes = require('./routes')
const {Organization, EmployeeData, CovidEmployeeData, RegisterHour} = require('./db/models')
const morgan = require('morgan')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('tiny'))

app.use("/api", routes);

db.sync({force: false})
.then(() => {
  const port = 3000
  app.listen(port,() => {
    console.log(`Escuchando en el puerto ${port}`)
    db.authenticate().then(()=>{
      console.log(">>>>>>>>>>Estamos contentados a la base de datos<<<<<<<<<<")
    }).catch((error) =>{
      console.log("Error en la conexion" + error)
    })
  })
})