const Municipio = require("../models/municipioModel");

const obtenerMunicipio=async(req,res)=>{
    try{
        const municip = await Municipio.find();
        res.json(municip)
    }catch(e){
        res.status(500).json({Mensaje: "Error al obtener los municipios"})
    }
}
 const crearMunicipio =async(req, res)=>{
    try{
        const {nombre, descripcion, poblacion, area} =req.body;
        const nuevodato = new Municipio({nombre, descripcion, poblacion, area});
        await nuevodato.save();
        res.json({Mensaje: nuevodato})
    }catch (e){
        res.status(500).json({Mensaje: "Error al ingresar municipio"})
    }
 }
 const updateMunicipio = async(req,res)=>{
    try{
        let {id} = req.params;
        let {nombre, descripcion} = req.body
        if (!nombre || !descripcion){
            return res.json({Mensaje: "Los campos estan vacios"})
        }
        else{
            let municipioActualizado = await Municipio.findByIdAndUpdate(id, {nombre, descripcion})
            return res.json({Mensaje: "Municipio actualizado", municipioActualizado})
        }
    }catch(e){
        res.json({Mensaje: "Municipio actualizado", municipioActualizado})
    }
 }
 const deleteMunicipio = async(req, res)=>{
    const {id} = req.params;
    let municipioEliminado = await Municipio.findByIdAndDelete(id)
    if(!municipioEliminado){
        return res.json({Mensaje: "Municipio no encontrado"})
    }
    else{
        res.json({Mensaje: "Municipio eliminado", municipioEliminado})
    }
 }
module.exports={obtenerMunicipio, crearMunicipio, updateMunicipio, deleteMunicipio}