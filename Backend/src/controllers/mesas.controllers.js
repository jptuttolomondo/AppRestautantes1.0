import * as mesasService from '../service/mesas.service.js'

const getMesas= async (req,res)=>{
    try{
        const result = await mesasService.getMesas();
        res.send({ status: 'success', result });
    }
catch(error){
    res.status(500).send({ status: 'error', message: error.message });
}
}


const createMesa= async (req,res)=>{
    try{
        const mesa = req.body;
        const result = await mesasService.createMesa(mesa);
        res.send({ status: 'success', result });
    }
catch(error){
    res.status(500).send({ status: 'error', message: error.message });
}
}

const deleteMesa= async (req,res)=>{
    try{
        const { id } = req.params;
        const result = await mesasService.deleteMesa(id);
    }
catch(error){
    res.status(500).send({ status: 'error', message: error.message });
}
}


export {
    getMesas,
    deleteMesa,
    createMesa
}







// import Mesas from "../dao/Factory/factory.js"
// const mesas = new Mesas()
// router.post("/mesa",async (req,res)=>{
//     const {mesa}=req.body
//     const mesaCreada=await mesas.create(mesa)
//     res.status(200).send({ result: "success", payload: mesaCreada });
// })

// router.get("/mesas",async (req,res)=>{

//    const mesasList= await mesas.get()
//    res.status(200).send({ result: "success", payload: mesasList });
// })

// router.delete("/mesas/:id",async(req,res)=>{
// const id=req.params.id
// const result= await mesas.delete(id)
// res.status(200).send({ result: "success", payload: result});
// })

