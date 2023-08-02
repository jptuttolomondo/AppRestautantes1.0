import * as productsService from '../service/products.service.js'

const getProducts= async (req,res)=>{
    try{
        const result = await productsService.getProducts();
        res.send({ status: 'success', result });
    }
catch(error){
    res.status(500).send({ status: 'error', message: error.message });
}
}


const createProduct= async (req,res)=>{
    try{
        const product = req.body;
        const result = await productsService.createProduct(product);
        res.send({ status: 'success', result });
    }
catch(error){
    res.status(500).send({ status: 'error', message: error.message });
}
}

const deleteProduct= async (req,res)=>{
    try{
        const { id } = req.params;
        const result = await productsService.deleteProduct(id);
    }
catch(error){
    res.status(500).send({ status: 'error', message: error.message });
}
}

export{getProducts,createProduct,deleteProduct}