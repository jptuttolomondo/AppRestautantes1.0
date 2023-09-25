import { Router } from "express";

const router = Router();

import{ getSalidas,createSalida,deleteSalida,updateSalida,getSalidaById}from '../controllers/salidas.controllers.js'

router.get('/salidas',getSalidas)
router.get('/salida/:id',getSalidaById)
router.post('/salida',createSalida)
router.delete('/salida',deleteSalida)
router.put('/salida/:id',updateSalida)
export default router