const express = require('express')
const app = express()
const { connection } = require("./db")
const routes = require('./routes')
const morgan = require('morgan')
const PORT = 3001

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('tiny'))

app.use("/api", routes);
/* app.use("/", (req, res) => res.json('probando')); */

connection.on("error", console.error.bind(console, "connection error:"))

connection.once("open", () => {
  console.log("Connectado a la DB puerto", PORT)
  app.listen(PORT, () => console.log(`Server conectado y escuchando en Cluster`))
})

//adb reverse tcp:3001 tcp:3001