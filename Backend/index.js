import express from "express"
import dotenv from 'dotenv'
import conectarDB from "./config/db.js"//cuando son dependencia que intalas no es necesario la extencion pero las creadas si es necesario
import veterinarioRoutes from './routes/veterinarioRoutes.js'
import pacienteRoute from './routes/PacienteRoute.js'
import cors from 'cors'

const app = express()
dotenv.config()//primero se hace el sondeo de las variables de entorno antes de conectar la db
conectarDB()

const dominiosPermitidos = [process.env.FRONTEND_URL];
const corsOptions = {
    Origin: function(origin, callback){
        if(dominiosPermitidos.indexOf(origin)!== -1){
            //el origen del request esta permitido
            callback(null, true)
        }else{
        
            callback(new Error('No permitido por Cors'))
        }
    }
}
app.use(cors(corsOptions));

app.use(express.json())//leemos el json que le estamos  pasando

app.use("/api/veterinarios",veterinarioRoutes)
app.use("/api/paciente", pacienteRoute)

const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log('Server funcionando en el puerto 4000');
})