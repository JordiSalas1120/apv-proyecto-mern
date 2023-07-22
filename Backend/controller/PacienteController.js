import e, { raw } from "express";
import Paciente from "../models/Paciente.js"

const agregarPaciente = async(req, res)=>{
    const paciente = new Paciente(req.body)
   paciente.veterinario = req.veterinario._id;
   try {
    //almacenamos el paciente
    const pacienteAlmacenado = await paciente.save();
    res.json(pacienteAlmacenado)
   } catch (error) {
    console.log(error);
   }


}
const obtenerPacientes = async(req, res)=>{
    const pacientes = await Paciente.find().where("veterinario").equals(req.veterinario)
    res.json(pacientes);
}


const obtenerPaciente =async (req,res) =>{
    const {id} = req.params;
    const paciente = await Paciente.findById(id)
  
    //validamos que  es el veterinario segun el id con el token valido
    if(paciente.veterinario.toString() !== req.veterinario._id.toString()){
        const error = new Error("accion no valida")
        res.json({msg:error})
    }
    res.json(paciente)
}
const actualizarPaciente = async(req, res) =>{
    const {id} = req.params;
    const paciente = await Paciente.findById(id)
    
    //validamos que  es el veterinario segun el id con el token valido
    if(paciente.veterinario.toString() !== req.veterinario._id.toString()){
        const error = new Error("accion no valida")
        res.json({msg:error})
    }
    paciente.nombre = req.body.nombre || paciente.nombre
    paciente.propietario = req.body.propietario || paciente.propietario
    paciente.alta = req.body.alta || paciente.alta
    paciente.sintomas = req.body.sintomas || paciente.sintomas
    try {
        const actualizarPaciente = await paciente.save();
        res.json({msg:"Paciente Actualizado"})
    } catch (error) {
        console.log(error);
    }
}
const eliminarPaciente = async(req,res) =>{
    const {id} = req.params;
    const paciente = await Paciente.findById(id)
    
    //validamos que  es el veterinario segun el id con el token valido
    if(paciente.veterinario.toString() !== req.veterinario._id.toString()){
        const error = new Error("accion no valida")
        res.json({msg:error})
    }
    await paciente.deleteOne();
    res.json({msg:"Se elimino un paciente"})
}


export {
    agregarPaciente,
    obtenerPacientes,
    obtenerPaciente,
    actualizarPaciente,
    eliminarPaciente
}