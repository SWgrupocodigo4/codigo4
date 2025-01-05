import { Router } from "express";
import { insertarSocioPago, listarSocioPago, obtenerSocioPago, actualizarSocioPago, darBajaSocioPago} from "../controllers/socio-pago.controller";


const router: Router = Router();

router.post('/',insertarSocioPago);
router.get('/',listarSocioPago);
router.get('/:idSocioPago',obtenerSocioPago);
router.put('/:idSocioPago', actualizarSocioPago);
router.delete('/:idSocioPago',darBajaSocioPago);

export default router;