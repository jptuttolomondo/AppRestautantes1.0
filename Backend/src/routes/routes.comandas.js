import { Router } from "express";

const router = Router();

import{ getComandas,createComanda,deleteComanda,modifyComanda,getComandaById,getComandasForCocina}from '../controllers/comandas.controllers.js'

router.get('/comandas',getComandas)
router.get('/comanda/:_idcomanda',getComandaById)
router.post('/comanda',createComanda)
router.put('/comanda/:_idcomanda',modifyComanda)
router.delete('/comanda/:_idcomanda',deleteComanda)
router.get('/comandas/cocina',getComandasForCocina)

export default router