import { Router } from 'express';
import { insertarInstalaciones, listarInstalaciones, obtenerInstalaciones, actualizarInstalaciones, darBajaInstalaciones } from '../controllers/instalaciones.controller';

const router: Router = Router();

router.post('/', insertarInstalaciones);
router.get('/', listarInstalaciones);
router.get('/:idInstalacion', obtenerInstalaciones);
router.put('/:idInstalacion', actualizarInstalaciones);
router.delete('/:idInstalacion', darBajaInstalaciones);

export default router;