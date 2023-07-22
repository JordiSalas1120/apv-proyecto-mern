import mongoose from "mongoose";
import bcrypt from "bcrypt"
import generarId from "../helpers/generarId.js";


const veterinarioSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    telefono:{
        type: String,
        Default:null,
        trim: true
    },
    web:{
        type: String,
        default: null
    },
    token:{
        type: String,
        default: generarId()
    },
    confirmado:{
        type: Boolean,
        default: false
    }

})
veterinarioSchema.pre("save", async function(next){//esta funcion ejecuta y muestra caundo el ususario se registra y antes de que envie o guarde los datos en la db
    if(!this.isModified("password")){//verificamos si no esta hasheado el password si lo esta solo lo saltamos y prevenimos qu elo vuelva a hashear
        next()
    }
    const salt = await bcrypt.genSalt(10)//hacemos que se detenga con el await en lo que se genera ese salt asi no llena el servidor
    this.password = await bcrypt.hash(this.password, salt)//hasheamos
})//parte del middleware de mongoose

//aqui comparamos la contraaseña con la que esta hasheada
veterinarioSchema.methods.comprobarPassword = async function(pass){
    return await bcrypt.compare(pass, this.password)//pasamos el pass del form que esta escribiendo y luego el pass que ya esta hasheado en la db
}


const Veterinario = mongoose.model("Veterinario", veterinarioSchema)//registra como modelo y pasamos laforma que leera los datos

export default Veterinario;