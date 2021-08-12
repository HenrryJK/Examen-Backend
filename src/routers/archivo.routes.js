import { Router } from 'express';
const router = Router();

import * as ArchiCtr from '../controllers/archivos.controller'
const { checkToken } = require('../auth/token_validation');

router.get('/' ,  ArchiCtr.readAllArchivos);
router.delete('/delete/:id' ,ArchiCtr.delArchivo);
router.post('/add',ArchiCtr.createArchivo );

export default router;