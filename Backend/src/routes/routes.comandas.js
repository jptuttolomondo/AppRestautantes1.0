import { Router } from "express";

const router = Router();

import{ getComandas,createComanda,deleteComanda}from '../controllers/comandas.controllers.js'

router.get('/comandas',getComandas)
router.post('/comandas',createComanda)
router.delete('/comandas',deleteComanda)

export default router