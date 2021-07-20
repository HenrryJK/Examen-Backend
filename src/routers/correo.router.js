import { Router } from 'express'

const router = Router();

import * as correoCtr from '../controllers/correo.controller';


router.get('/', correoCtr.readAllCorreo);
router.post('/send', correoCtr.email);
router.delete('/delete/:id', correoCtr.delCorreo);

export default router;