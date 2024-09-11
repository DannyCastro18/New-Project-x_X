const mongoose = require('mongoose')

const conexionDB = async ()=>{
    try{
        mongoose.connect('mongodb+srv://DannyCastro:danny@cluster0.elfxezh.mongodb.net/pais?retryWrites=true&w=majority&appName=Cluster0');
        console.log("Conectada a la base de datos :b");
    }catch(e){
        console.log("Error al conectar a la base de datos" )
    }
};
module.exports = conexionDB;