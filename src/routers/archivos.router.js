import { Router } from 'express';
const router = Router();

import * as ArchivosCtr from '../controllers/archivos.controller'
const { checkToken } = require('../oauth/token_validation');

router.get('/' ,  ArchivosCtr.readAllArchivos);
router.delete('/delete/:id',ArchivosCtr.delArchi);
router.post('/add', checkToken ,ArchivosCtr.createArchivo );

export default router;
