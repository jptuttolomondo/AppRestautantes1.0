import { Router } from "express";

const router = Router();

import{ getItems,createItem,deleteItem}from '../controllers/items.controllers.js'

router.get('/items',getItems)
router.post('/items',createItem)
router.delete('/items',deleteItem)

export default router