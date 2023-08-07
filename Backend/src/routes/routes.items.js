import { Router } from "express";

const router = Router();

import{ getItems,createItem,deleteItem,updateItem}from '../controllers/items.controllers.js'

router.get('/items',getItems)
router.post('/item',createItem)
router.delete('/items/:uuid',deleteItem)
router.put('/items/:uuid',updateItem)

export default router