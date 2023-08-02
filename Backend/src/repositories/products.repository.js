import ProductsDao from '../dao/classes/Products.dao.js';

export default class ProductsRepository {
    constructor() {
        this.dao = new ProductsDao();
    }

    getProducts = async () => {
        const result = await this.dao.getProducts();
        return result;
    }
    createProduct = async (product) => {
        const result = await this.dao.createProduct(product);
        return result;
    }
        deleteProduct = async (id) => {
        const result = await this.dao.deleteProduct(id);
        return result;
    }
   }