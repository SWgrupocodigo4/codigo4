import { Router } from "express";
import { insertarSocio, listarSocios, obtenerSocio, actualizarSocio, darBajaSocio} from "../controllers/socio.controller";


const router: Router = Router();

router.post('/',insertarSocio);
router.get('/',listarSocios);
router.get('/:idSocio',obtenerSocio);
router.put('/:idSocio', actualizarSocio);
router.delete('/:idSocio',darBajaSocio);

export default router;