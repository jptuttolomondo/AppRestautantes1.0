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
   
//     for (let i = 0; i < comandasGet.length; i++) { 
//       const itemsGet=await itemModel.find({comanda:comandasGet[i]._id });
//        console.log(itemsGet)
//        for(let j=0; j<itemsGet.length; j++) {
//        comandasGet[i].items.push({item:itemsGet[j]._id})
//        }
//        console.log('comandasGet',comandasGet[i])
// const result=await comandaModel.updateOne({_id:comandasGet[i]._id},comandasGet[i]) //
// console.log(result)
   // }
 
    //let salidaComanda = await getAllComandas(comandasGet);
    res.status(200).send({ result: "success", payload: comandasGet });
  } catch (error) {
    console.error(error);
  }
});

router.get("/comanda/:uuid", async (req, res) => {
  try {
    let { uuid } = req.params;
    const comandasGet = await comandaModel.find({_id:uuid});
    //let salecomanda = [];
    //salecomanda.push(comandasGet);
    //let salidaComanda = await getAllComandas(salecomanda);
   // console.log(JSON.stringify(comandasGet,null,'\t'))
    res.status(200).send({ result: "success", payload: comandasGet });
  } catch (error) {
    console.error(error);
  }
});

router.post("/comanda", async (req, res) => {
  let { date, mesa, estado, mozo, items, total, deleted } = req.body;
  try {
    //se pasa pod body id de moxo, id de producto, array de productos

    //total y subtotales ya vienen calculados desde frontend
    //date viene de frontend
    const comandaSave = await comandaModel.create({
      date,
      mesa,
      estado,
      mozo,
      total,
      deleted,
    });

    //console.log('comandaSave',comandaSave);
    for (let i = 0; i < items.length; i++) {
      const cantidad = items[i].cantidad;
      const producto = items[i].producto;
      const subtotalItem = items[i].subtotalItem;
      const deleted = false;
      let comanda = comandaSave._id;
      let resultComanda=await itemModel.create({
        cantidad,
        producto,
        subtotalItem,
        deleted,
        comanda,
      });
    }

   // const comandasGet = await comandaModel.findById(comandaSave._id);
   //console.log('comandaSave',comandaSave);

      const itemsGet=await itemModel.find({comanda:comandaSave._id });
      //console.log('itemsGet',itemsGet);
       for(let j=0; j<itemsGet.length; j++) {
       comandaSave.items.push({item:itemsGet[j]._id})
       }
      // console.log('comandaSalida',comandaSave)
const result=await comandaModel.updateOne({_id:comandaSave._id},comandaSave) 

    res.status(200).send({ result: "success", payload: comandaSave });
  } catch (error) {
    console.error(error);
  }
});

router.put("/comanda/:uuid", async (req, res) => {
  const { uuid } = req.params;
  const comandaToreplace = req.body;
  try {
    if (
      !comandaToreplace.mesa ||
      !comandaToreplace.estado ||
      !comandaToreplace.mozo ||
      !comandaToreplace.items ||
      !comandaToreplace.total
      //!comandaToreplace.deleted
    )
      res.status(400).send({ error: "incomplete data" });
    let comandaToUpdate = await comandaModel.updateOne(
      { _id: uuid },
      comandaToreplace
    );

    await itemModel.deleteMany({ comanda: uuid });

    for (let i = 0; i < comandaToreplace.items.length; i++) {
      const cantidad = comandaToreplace.items[i].cantidad;
      const producto = comandaToreplace.items[i].producto;
      const subtotalItem = comandaToreplace.items[i].subtotalItem;
      const deleted = comandaToreplace.items[i].deleted;
      const comanda = uuid;

      await itemModel.create({
        cantidad,
        producto,
        subtotalItem,
        deleted,
        comanda,
      });
    }

    res.status(200).send({ result: "success", payload: comandaToUpdate });
  } catch (error) {
    console.error(error);
  }
});

router.delete("/comanda/:uuid", async (req, res) => {
  const { uuid } = req.params;

  try {
    const comandaToLogicalDelete = await comandaModel
      .findById(uuid)
      .populate("items");
    //console.log(comandaToLogicalDelete);
    comandaToLogicalDelete.deleted = true;
    const comanda = await userModel.updateOne(
      { _id: uuid },
      comandaToLogicalDelete
    );
    const itemsToDelete = await itemModel.find({comanda:uuid});
    console.log(itemsToDelete)
const itemsDeleted=await itemModel.updateMany({comanda:uuid},{deleted:true})



    res.status(200).send({ result: "success", payload: comanda });
  } catch (error) {
    console.error(error);
  }
});

export default router;
