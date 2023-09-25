import { Router } from "express";

const router = Router();

import{ getCajas,createCaja,deleteCaja,updateCaja,getCajaById}from '../controllers/cajas.controllers.js'

router.get('/cajas',getCajas)
router.get('/caja/:id',getCajaById)
router.post('/caja',createCaja)
router.delete('/caja/:id',deleteCaja)
router.put('/caja/:id',updateCaja)
export default router