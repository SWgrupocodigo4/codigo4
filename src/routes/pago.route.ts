import { Router } from "express";
import { actualizarPago, darBajaPago, insertarPago, listarPago, obtenerPago } from "../controllers/pago.controller";

const router: Router = Router();

router.post('/',insertarPago);
router.get('/',listarPago);
router.get('/:idPago',obtenerPago);
router.put('/:idPago',actualizarPago);
router.delete('/:idPago',darBajaPago);

export default router;