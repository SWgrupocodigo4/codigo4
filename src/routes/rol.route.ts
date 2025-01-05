import {Router} from 'express';
import {insertarRoles, listarRoles, obtenerRoles, actualizarRoles, darBajaRoles} from '../controllers/rol.controller';

const router: Router = Router();

router.post('/',insertarRoles);
router.get('/',listarRoles);
router.get('/:idRol',obtenerRoles);
router.put('/:idRol',actualizarRoles);
router.delete('/:idRol',darBajaRoles);

export default router;
