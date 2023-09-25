import * as cajasService from '../service/cajas.service.js'

const getCajas= async (req,res)=>{
    try{
        const result = await cajasService.getCajas();
        res.send({ status: 'success', result });
    }
catch(error){
    res.status(500).send({ status: 'error', message: error.message });
}
}


const createCaja= async (req,res)=>{
    try{
        const caja = req.body;
        const result = await cajasService.createCaja(caja);
        res.send({ status: 'success', result });
    }
catch(error){
    res.status(500).send({ status: 'error', message: error.message });
}
}

const deleteCaja= async (req,res)=>{
    try{
        const { id } = req.params;
        const result = await cajasService.deleteCaja(id);
        res.status(200).send({ status: 'success', message: result });
    }
catch(error){
    res.status(500).send({ status: 'error', message: error.message });
}
}


const updateCaja= async (req,res)=>{
    try{
        const caja=req.body
        const { id } = req.params;
        const result = await cajasService.updateCaja(id,caja);
        res.status(200).send({ status: 'success', message: result });
    }
catch(error){
    res.status(500).send({ status: 'error', message: error.message });
}
}

const getCajaById= async (req,res)=>{
    try{
    
        const { id } = req.params;
        const result = await cajasService.getCajaById(id);
        res.status(200).send({ status: 'success', message: result });
    }
catch(error){
    res.status(500).send({ status: 'error', message: error.message });
}
}


export{getCajas,createCaja,deleteCaja,updateCaja,getCajaById}