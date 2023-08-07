import ItemsRepository from '../repositories/items.repository.js';

const itemsRepository = new ItemsRepository();

const createItem = async(item) => {
  
    const result = await itemsRepository.createItem(item);
    return result;
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