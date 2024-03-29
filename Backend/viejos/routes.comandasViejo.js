import { Router } from "express";
const router = Router();
import { comandaModel } from "../src/dao/Models/comandas.model.js";
import  userModel  from "../src/dao/Models/users.model.js";
import { itemModel } from "../src/dao/Models/items.model.js";
import { getAllComandas } from "../src/controllers/comandasControllers.js";

router.get("/comandas", async (req, res) => {
  try {
    let comandasGet = await comandaModel.find({ deleted: false });
    const comandasSalida = await getAllComandas(comandasGet);
    res.status(200).send({ result: "success", payload: comandasSalida });
  } catch (error) {
    console.error(error);
  }
});

router.get("/comanda/:uuid", async (req, res) => {
  try {
    let { uuid } = req.params;
    const comandasGet = await comandaModel.find({ _id: uuid });
    const comandasSalida = await getAllComandas(comandasGet);
    res.status(200).send({ result: "success", payload: comandasSalida });
  } catch (error) {
    console.error(error);
  }
});
 
router.post("/comanda", async (req, res) => {
  let { date, mesa, estado, mozo, items, total, deleted } = req.body;
  try {

    const comandaSave = await comandaModel.create({
      date,
      mesa,
      estado,
      mozo,
      total,
      deleted,
    });

    for (let i = 0; i < items.length; i++) {
      const cantidad = items[i].cantidad;
      const producto = items[i].producto;
      const subtotalItem = items[i].subtotalItem;
      const deleted = false;
      let comanda = comandaSave._id;
      await itemModel.create({
        cantidad,
        producto,
        subtotalItem,
        deleted,
        comanda,
      });
    }
    const itemsGet = await itemModel.find({ comanda: comandaSave._id });
    for (let j = 0; j < itemsGet.length; j++) {
      comandaSave.items.push({ item: itemsGet[j]._id });
    }
    await comandaModel.updateOne({ _id: comandaSave._id }, comandaSave);
    res.status(200).send({ result: "success", payload: comandaSave });
  } catch (error) {
    console.error(error);
  }
});

router.post("/nuevacomanda", async (req, res) => {
  let body={date:'',
     mesa:"", estado:'', mozo:'', 
  items:[{cantidad:0,producto:'',subtotalItem:0,deleted:false}],
   total:0, deleted:false 
  }
  try {


  
    const comandaSave = await comandaModel.create({
      date:'',
      mesa:body.mesa,
      estado:body.estado,
      mozo:body.mozo,
      total:body.total,
      deleted:body.deleted,
  });
  
    res.status(200).send({ result: "success", payload:comandaSave });
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
      !comandaToreplace.total ||
      comandaToreplace.deleted === false
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

    comandaToLogicalDelete.deleted = true;
    const comanda = await userModel.updateOne(
      { _id: uuid },
      comandaToLogicalDelete
    );
    const itemsToDelete = await itemModel.find({ comanda: uuid });

    await itemModel.updateMany({ comanda: uuid }, { deleted: true });
    res.status(200).send({ result: "success", payload: comanda });
  } catch (error) {
    console.error(error);
  }
});

export default router;
