import express from "express"
import { confirmar,
            registrar,
            perfil,
            autenticar,
            olvidePassword,
            comprobarToken,
            nuevoPass
        } from '../controller/veterinarioController.js'
import  checkAuth  from "../middleware/authMiddleware.js";




const router = express.Router()

router.post("/", registrar);//enviamos los datos con un post

// no enviamos datos los pedimos
router.get("/confirmar/:token", confirmar);
router.post("/login", autenticar);
router.post("/olvide-password", olvidePassword)
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPass)


router.get("/perfil", checkAuth ,perfil)
export default router