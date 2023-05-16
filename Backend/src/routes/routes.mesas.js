import { Router } from "express";
import {mesaModel}from './../models/mesas.model.js'
const router = Router();


router.post("/mesa",async (req,res)=>{
    const {mesa}=req.body
    await mesaModel.create({
        mesa
    })
  res.send('post de mesa')
})



router.get("/mesas",async (req,res)=>{

   const mesas= await mesaModel.find()
   res.status(200).send({ result: "success", payload: mesas });
})

export default router
