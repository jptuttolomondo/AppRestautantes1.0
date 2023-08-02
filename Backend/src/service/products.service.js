import ProductsRepository from '../repositories/products.repository.js';

const productsRepository = new ProductsRepository();

const createProduct = async(product) => {

    const result = await productsRepository.createProduct(product);
    return result;
}

const getProducts = async () => {
    const result = await productsRepository.getProducts();
    return result;
}


const deleteProduct = async (id) => {
    const result = await productsRepository.deleteProduct(id);
    return result;
}

export {
    createProduct,
    getProducts,
    deleteProduct
}