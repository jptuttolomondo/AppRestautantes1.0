import { Router } from "express";

const router = Router();

import{ getComandas,createComanda,deleteComanda,modifyComanda,getComandaById,getComandasForCocina,putComanda}from '../controllers/comandas.controllers.js'

router.get('/comandas',getComandas)
router.get('/comanda/:idcomanda',getComandaById)
router.post('/comanda',createComanda)
router.put('/comanda/:_idcomanda',modifyComanda)
router.delete('/comanda/:_idcomanda',deleteComanda)
router.get('/comandas/cocina',getComandasForCocina)
router.put('/comandas/cocina/:_idcomanda',putComanda)

export default router