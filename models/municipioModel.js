const mongoose = require('mongoose');

const municipioSchema=new mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,
        required:false
    },
    poblacion:{
        type:String,
        required:false
    },
    area:{
        type:String,
        required:false
    }
});

const Municipio = mongoose.model('Municipio', municipioSchema);

module.exports = Municipio;