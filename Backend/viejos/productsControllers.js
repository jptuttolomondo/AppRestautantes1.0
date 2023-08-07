import { productModel } from "../dao/Models/products.model.js";
export async function getProductName(productId) {
  let productName = await productModel.findById(productId);
  return productName.productName;
}
