import { Router } from "express";
//import {mesaModel}from '../dao/Models/mesas.model.js'
const router = Router();

import{ getMesas,createMesa,deleteMesa}from '../controllers/mesas.controllers.js'

router.get('/mesas',getMesas)
router.post('/mesas',createMesa)
router.delete('/mesas',deleteMesa)

 export default router






/*
import Router from './router.js';
// import Products from "../dao/dbManagers/products.js";
import addProductValidator from "../middlewares/addProductValidator.js";
import {
    getProducts,
    findProduct,
    addNewProduct,
    updateProduct,
    deleteProduct,
    renderProductsRealTime
} from '../controllers/productsController.js';



export default class ProductsRouter extends Router {
    init() {
        this.get('/', ['USER', 'ADMIN'], getProducts);

        this.get("/product/:id", ['USER', 'ADMIN'], findProduct);

        this.post("/", ['ADMIN'], addProductValidator, addNewProduct);

        this.put("/:id", ['ADMIN'], updateProduct);

        this.delete("/:id",['ADMIN'], deleteProduct);

        this.get("/realtimeproducts", ['USER', 'ADMIN'],renderProductsRealTime);

    }


}*/