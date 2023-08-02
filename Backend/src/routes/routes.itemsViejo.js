// import { Router } from "express";
// const router = Router();
// import{itemModel}from '../dao/Models/items.model.js' 
// router.get("/items", async (req, res) => { 
//   try{
// const items= await itemModel.find()
// res.status(200).send({result:'success',payload:items})
//   }
//   catch(error){console.error(error)}

// })
// router.post("/item", async (req, res) => {
// const {cantidad,producto,subtotalItem}=req.body 

//   try {
     
//     if (!cantidad||!producto||!subtotalItem)res.status(400).send({ error: "datos incompletos" });
 
//   let comanda=''
//   let deleted=false
//     const item = await itemModel.create({
//         cantidad,producto,subtotalItem,deleted,comanda
//     });
 
//     res.status(200).send({ result: "success", payload: item });
//   } catch (error) {
//     console.error(error); 
//   }
// });

// router.put("/item", async (req, res) => {
//   res.send("put item");
// });
// router.delete("/item", async (req, res) => {
//   res.send("delete comanda");
// });

// export default router;
