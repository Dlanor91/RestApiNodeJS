const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

//conectar mongo
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/restapis");

//crear el server
const app = express();

//levantar las rutas
app.use("/", routes());

//puerto del servidor
app.listen(5000);
