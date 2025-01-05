import { Router } from 'express';
import { insertarTipoMembresia, listarTiposMembresia, obtenerTipoMembresia, actualizarTipoMembresia, darBajaTipoMembresia } from '../controllers/tipo-membresia.controller';

const router: Router = Router();

router.post('/', insertarTipoMembresia);
router.get('/', listarTiposMembresia);
router.get('/:idTipoMembresia', obtenerTipoMembresia);
router.put('/:idTipoMembresia', actualizarTipoMembresia);
router.delete('/:idTipoMembresia', darBajaTipoMembresia);

export default router;