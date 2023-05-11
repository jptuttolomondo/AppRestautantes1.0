import { Router } from "express";
const router = Router();
import { comandaModel } from "./../models/comandas.model.js";
import { userModel } from "../models/users.model.js";
import { productModel } from "../models/products.model.js";
import { itemModel } from "../models/items.model.js";
import { getAllComandas } from "../controllers/comandasControllers.js";

router.get("/comandas", async (req, res) => {
  try {
    const comandasGet = await comandaModel.find({ deleted: false });
    //const prueba=await comandaModel.populate('Items')
    //console.log(prueba)
    let salidaComanda = await getAllComandas(comandasGet)
    res.status(200).send({ result: "success", payload: salidaComanda });
  } catch (error) {
    console.error(error);
  }
});

router.get("/comanda/:uuid", async (req, res) => {
  try {
    let { uuid } = req.params;
    const comandasGet = await comandaModel.findById(uuid);
    let salecomanda = [];
    salecomanda.push(comandasGet);
    let salidaComanda = await getAllComandas(salecomanda);
    res.status(200).send({ result: "success", payload: salidaComanda });
  } catch (error) {
    console.error(error);
  }
});

 

router.post("/comanda", async (req, res) => {
  let{ date, mesa, estado, mozo,items,total,deleted} = req.body;
  try {
    //console.log(req.body)

    const comandaSave = await comandaModel.create({
      date,
      mesa,
      estado,
      mozo,
      total,
      deleted,
    });
for (let i = 0; i < items.length; i++){
  const cantidad=items[i].cantidad
  const producto=items[i].producto
  const subtotalItem=items[i].subtotalItem
  const deleted=false
  let comanda=comandaSave._id

    const itemSaved=await itemModel.create({

      cantidad,producto,subtotalItem,deleted,comanda
    })
    console.log('itemSaved',itemSaved)
  }
    

    res.status(200).send({ result: "success", payload: comandaSave });
  } catch (error) {
    console.error(error);
  }
});

router.put("/comanda", async (req, res) => {
  res.send("put comanda");
});

router.delete("/comanda/:uuid", async (req, res) => {
  const { uuid } = req.params;

  try {
    const comandaToLogicalDelete = await comandaModel.findById(uuid);
    comandaToLogicalDelete.deleted = true;
    const comanda = await userModel.updateOne({ _id: uuid }, comandaToLogicalDelete);
    res.status(200).send({ result: "success", payload: comanda });
  } catch (error) {
    console.error(error);
  }

});

export default router;
