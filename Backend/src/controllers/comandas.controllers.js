import * as ComandasService from '../service/comandas.service.js'

const getComandas= async (req,res)=>{
    try{
        const result = await ComandasService.getComandas();
        res.send({ status: 'success', result });
    }
catch(error){
    res.status(500).send({ status: 'error', message: error.message });
}
}


const createComanda= async (req,res)=>{
    try{
        const Comanda = req.body;
        const result = await ComandasService.createComanda(Comanda);
        res.send({ status: 'success', result });
    }
catch(error){
    res.status(500).send({ status: 'error', message: error.message });
}
}

const deleteComanda= async (req,res)=>{
    try{
        const { id } = req.params;
        const result = await ComandasService.deleteComanda(id);
    }
catch(error){
    res.status(500).send({ status: 'error', message: error.message });
}
}

export{getComandas,createComanda,deleteComanda}