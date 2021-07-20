import { Router } from 'express'

const router = Router();

import * as emailCtr from '../controllers/correo.controller';


router.get('/', emailCtr.readAllCorreo);
router.post('/send', emailCtr.email);
router.delete('/delete/:id', emailCtr.delCorreo);

export default router;