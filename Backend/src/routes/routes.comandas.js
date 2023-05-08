import { Router } from "express";
const router = Router();
import{comandaModel}from './../models/comandas.model.js'
router.get("/comandas", async (req, res) => { 
  try{
const comandasGet= await comandaModel.find()
res.status(200).send({result:'success',payload:comandasGet})
  }catch(error){console.error(error)}
})
router.post("/comanda", async (req, res) => {
  //const {}
  res.send("post comanda");
});

router.put("/comanda", async (req, res) => {
  res.send("put comanda");
});
router.delete("/comanda", async (req, res) => {
  res.send("delete comanda");
});

export default router;
