import {Router} from 'express';
import {insertarParticipacion, listarParticipaciones, obtenerParticipacion, actualizarParticipacion, darBajaParticipacion} from '../controllers/participacion.controller';

const router: Router = Router();

router.post('/', insertarParticipacion);
router.get('/', listarParticipaciones);
router.get('/:idParticipacion', obtenerParticipacion);
router.put('/:idParticipacion', actualizarParticipacion);
router.delete('/:idParticipacion', darBajaParticipacion);

export default router;