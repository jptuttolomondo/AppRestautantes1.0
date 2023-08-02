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

export{getItems,createItem,deleteItem}