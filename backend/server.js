const express = require("express");
const cors = require("cors");

const routes = require("./src/routes/routes");
const connectDB = require("./config/database");

//Inicio do Servidor
const app = express();

//Conexão Com a Database
connectDB();

//Recursos do Servidor
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);


//Execução do Servidor
app.listen(5000, ()=>{
    console.log("Servidor Correndo");
});

