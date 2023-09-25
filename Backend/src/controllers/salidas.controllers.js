import * as salidasService from '../service/salidas.service.js'

const getSalidas= async (req,res)=>{
    try{
        const result = await salidasService.getSalidas();
        res.send({ status: 'success', result });
    }
catch(error){
    res.status(500).send({ status: 'error', message: error.message });
}
}


const createSalida= async (req,res)=>{
    try{
        const product = req.body;
        const result = await salidasService.createSalida(product);
        res.send({ status: 'success', result });
    }
catch(error){
    res.status(500).send({ status: 'error', message: error.message });
}
}

const deleteSalida= async (req,res)=>{
    try{
        const { id } = req.params;
        const result = await salidasService.deleteSalida(id);
        res.status(200).send({ status: 'success',result });
    }
catch(error){
    res.status(500).send({ status: 'error', message: error.message });
}
}


const updateSalida= async (req,res)=>{
    try{
        const salida=req.body
        const { id } = req.params;
        const result = await salidasService.updateSalida(id,salida);
        res.status(200).send({ status: 'success', message: result });
    }
catch(error){
    res.status(500).send({ status: 'error', message: error.message });
}
}

const getSalidaById= async (req,res)=>{
    try{

        const { id } = req.params;
        const result = await salidasService.getSalidaById(id);
        res.status(200).send({ status: 'success', message: result });
    }
catch(error){
    res.status(500).send({ status: 'error', message: error.message });
}
}


export{getSalidas,createSalida,deleteSalida,updateSalida,getSalidaById}