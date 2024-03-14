const express = require('express')
const routes = require('./routes')

//crear el server
const app = express()

//levantar las rutas
app.use('/', routes())

//puerto del servidor
app.listen(5000)

