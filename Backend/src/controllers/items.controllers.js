import * as itemsService from '../service/items.service.js'

const getItems= async (req,res)=>{
    try{
        const result = await itemsService.getItems();
        res.send({ status: 'success', result });
    }
catch(error){
    res.status(500).send({ status: 'error', message: error.message });
}
}


const createItem= async (req,res)=>{
    try{

        const item = req.body;
        if (!item.cantidad||!item.producto||!item.subtotalItem)res.status(400).send({ error: "datos incompletos" });
        let comanda=''
        item["deleted"]=false
        item["comanda"]=''
    
        const result = await itemsService.createItem(item);
        res.send({ status: 'success', result });
    }
catch(error){
    res.status(500).send({ status: 'error', message: error.message });
}
}

const deleteItem= async (req,res)=>{
    try{
        const { id } = req.params;
        const result = await itemsService.deleteItem(id);
    }
catch(error){
    res.status(500).send({ status: 'error', message: error.message });
}
}


const updateItem= async (req,res)=>{
    try{
        const { id } = req.params;
        const result = await itemsService.updateItem(id);
    }
catch(error){
    res.status(500).send({ status: 'error', message: error.message });
}
}


export{getItems,createItem,deleteItem,updateItem}