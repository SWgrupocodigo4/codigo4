import { Router } from "express";
import { insertarSocio, listarSocios, obtenerSocio} from "../controllers/socio.controller";

const router: Router = Router();

router.post('/',insertarSocio);
router.get('/',listarSocios);
router.get('/:idPago',obtenerSocio);
/*router.put('/:idPago',actualizarPago);
router.delete('/:idPago',darBajaPago);*/

export default router;