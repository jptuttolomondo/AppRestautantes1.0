import ItemsRepository from '../repositories/items.repository.js';

const itemsRepository = new ItemsRepository();

const createItem = async(item,idComanda) => {
    try{
 item.forEach(e => {
    e["comanda"] = idComanda
    e["deleted"]=false
 }) 
    for(let i = 0; i < item.length; i++)   await itemsRepository.createItem(item[i]);
      return {success: true,message:'item creado correctamente'};
    }
    catch(error){console.error(error)}
}

const getItems = async () => {
    const result = await itemsRepository.getItems();
    return result;
}


const deleteItem = async (id) => {
    const result = await itemsRepository.deleteItem(id);
    return result;
}

const updateItem = async (id) => {
    const result = await itemsRepository.updateItem(id);
    return result;
}


export {
    createItem,
    getItems,
    deleteItem,
    updateItem
}