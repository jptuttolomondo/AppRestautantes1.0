import itemModel from '../Models/items.model.js';

export default class ItemsDao {
    getItems = async () => {
        const result = await itemModel.find();
        return result;
    }
    getItemById = async (id) => {
        const result = await itemModel.find({_id:id});
        return result;
    }
    deleteItem = async (id) => {
        const result = await itemModel.delete(id);
        return result;
    }

    createItem = async (item) => {
     
        const result = await itemModel.create(item);
        return result;
    }
    updateItem = async (id, item) => {
        const result = await itemModel.findByIdAndUpdate(id, item);
        return result;
    }

}