import { Router } from 'express';
import {insertarTipoActividad, listarTipoActividades, obtenerTipoActividad, actualizarTipoActividad, darBajaTipoActividad } from '../controllers/tipo-actividad.controller';

const router: Router = Router();

router.post('/', insertarTipoActividad);
router.get('/', listarTipoActividades);
router.get('/:idTipoActividad', obtenerTipoActividad);
router.put('/:idTipoActividad', actualizarTipoActividad);
router.delete('/:idTipoActividad', darBajaTipoActividad);

export default router;