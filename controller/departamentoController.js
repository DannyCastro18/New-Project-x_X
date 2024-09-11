const Dpto = require("../models/departamentoModel");

const obtenerDpto=async(req,res)=>{
    try{
        const departaments = await Dpto.find();
        res.json(departaments)
    }catch(e){
        res.status(500).json({Mensaje: "Error al obtener los departamentos"})
    }
}
const crearDpto =async(req, res)=>{
    try{
        const {nombre, capital, descripcion, poblacion, area} = req.body;
        const nuevodato= new Dpto({nombre, capital, descripcion, poblacion, area});
        await nuevodato.save();
        res.json({Mensaje: nuevodato})
    }catch (e){
        res.status(500).json({Mensaje: "Error al ingresar departamento"})
    }

}
const updateDpto = async(req,res)=>{
    try{
        let {id} = req.params;
        let {nombre, descripcion} = req.body
        if (!nombre || !descripcion){
            return res.json({Mensaje: "Los campos estan vacios"})
        }
        else{
           let dptoActualizado = await Dpto.findByIdAndUpdate(id, {nombre, descripcion})
           return res.json({Mensaje: "Departamento actualizado", dptoActualizado})
        }
    }catch (e)
    {
        res.json({Mensaje: "Error al actualizar"})
    }
}

const deleteDpto = async(req,res)=>{
    const {id} = req.params;
    let dptoEliminado = await Dpto.findByIdAndDelete(id)
    if(!dptoEliminado){
        return res.json({Mensaje: "Departamento no encontrado"})
    }
    else{
        res.json({Mensaje: "Departamento eliminado", dptoEliminado})
    }
}
module.exports={obtenerDpto, crearDpto, updateDpto, deleteDpto}