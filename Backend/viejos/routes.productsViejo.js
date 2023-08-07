// import { Router } from "express";
// const router = Router();
// import { productModel } from "../dao/Models/products.model.js";
// router.get("/products", async (req, res) => {
//   try {
//     const products = await productModel.find({deleted:false});
//   console.log(products)
//     res.status(200).send({ result: "success", products:products });
//   } catch (error) {
//     console.error(error);
//   }
// });

// router.post("/product", async (req, res) => {
//   try {
//     const { productName, image, category, description, precio, stock } =
//       req.body;

//     const product = await productModel.find({ productName: productName });
//     if (product && product.length != 0) {
//       if (
//         !productName ||
//         !image ||
//         !category ||
//         !description ||
//         !precio ||
//         !stock
//       )
//         res.status(400).send({ error: "incomplete data" });
//       if (productName === product[0].productName)
//         res.status(400).send({ error: "This product already exist" });
//     } else {
//       const postProduct = await productModel.create({
//         productName,
//         image,
//         category,
//         description,
//         precio,
//         stock,
//       });
//       res.status(200).send({ result: "success", payload: postProduct });
//     }
//   } catch (error) {
//     console.error(error);
//   }
// });

// router.put("/product/:uuid", async (req, res) => {
//   try {
//     const { uuid } = req.params;
//     const { productName, image, category, description, precio, stock } =
//       req.body;

//     const product = await productModel.findOne({ _id: uuid });

//     if (product) {
//       if (
//         !productName ||
//         !image ||
//         !category ||
//         !description ||
//         !precio ||
//         !stock
//       )
//         res.status(400).send({ error: "incomplete data" });
//       const postProduct = await productModel.updateOne({
//         productName,
//         image,
//         category,
//         description,
//         precio,
//         stock,
//       });
//       res.status(200).send({ result: "success", payload: postProduct });
//     } else {
//       res.status(400).send({ error: "This product not exist" });
//     }
//   } catch (error) {
//     console.error(error);
//   }
// });
// router.delete("/product/:uuid", async (req, res) => {
//   try {
//     const { uuid } = req.params;


//     const productToLogicalDelete = await productModel.findById(uuid);
//     productToLogicalDelete.deleted = true;

//     const productDeleted = await productModel.updateOne({ _id: uuid }, productToLogicalDelete);

//     res.status(200).send({ result: "success", payload: productDeleted });
  
//   } catch (error) {
//     console.error(error);
//   }
// });

// export default router;
