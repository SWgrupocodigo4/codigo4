import {Router} from 'express';
import {insertarActividad, listarActividades, obtenerActividad, actualizarActividad, darBajaActividad} from '../controllers/actividad.controller';

const router: Router = Router();

router.post('/',insertarActividad);
router.get('/',listarActividades);
router.get('/:idActividad',obtenerActividad);
router.put('/:idActividad', actualizarActividad);
router.delete('/:idActividad', darBajaActividad);

export default router;