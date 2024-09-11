const express = require('express');
const app = express();
PORT=5000;
const departamentoRoutes = require('./Routes/departamentoRoutes')
const municipioRoutes = require('./Routes/municipioRoutes')
const connexionDB = require("./config/db")
connexionDB()
app.use(express.json())

app.use("/api", departamentoRoutes);
app.use("/api", municipioRoutes);
//conectar a la base de datos

app.listen(PORT, ()=>{
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });

