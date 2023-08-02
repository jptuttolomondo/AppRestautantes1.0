import productModel from '../Models/products.model.js';

export default class ProductsDao {
    getProducts = async () => {
        const result = await productModel.find();
        return result;
    }
    getProductById = async (id) => {
        const result = await productModel.find({_id:id});
        return result;
    }
    deleteProduct = async (id) => {
        const result = await productModel.delete(id);
        return result;
    }

    createProduct = async (product) => {
        const result = await productModel.create(product);
        return result;
    }
    updateProduct = async (id, product) => {
        const result = await productModel.findByIdAndUpdate(id, product);
        return result;
    }

}