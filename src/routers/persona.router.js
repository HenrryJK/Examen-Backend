import { Router } from 'express';
const router = Router();

import * as PersonaCtr from '../controllers/persona.controller'
const { checkToken } = require('../auth/token_validation.js');

router.get('/' ,  PersonaCtr.readAllPersonas);
router.delete('/delete/:id' ,PersonaCtr.delPersona);
router.post('/add',checkToken ,PersonaCtr.createPersona );

export default router;