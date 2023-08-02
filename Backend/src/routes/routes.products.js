import { Router } from "express";

const router = Router();

import{ getProducts,createProduct,deleteProduct}from '../controllers/products.controllers.js'

router.get('/products',getProducts)
router.post('/products',createProduct)
router.delete('/products',deleteProduct)

export default router