import  express  from "express";
import { obtenerPacientes, agregarPaciente, obtenerPaciente, actualizarPaciente, eliminarPaciente} from "../controller/PacienteController.js"
import checkAuth from "../middleware/authMiddleware.js";

const route = express.Router();

route.route("/")
    .post(checkAuth,agregarPaciente)
    .get( checkAuth, obtenerPacientes)
    
route.route("/:id")
    .get(checkAuth, obtenerPaciente)
    .put(checkAuth, actualizarPaciente)
    .delete(checkAuth, eliminarPaciente)
    

export default route