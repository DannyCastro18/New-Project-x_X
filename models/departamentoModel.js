const mongoose = require('mongoose');

const departamentoSchema=new mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    capital:{
        type:String,
        required:false
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

const Departamento = mongoose.model('Departamento', departamentoSchema);

module.exports = Departamento;