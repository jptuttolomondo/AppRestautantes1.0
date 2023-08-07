import ItemsDao from "../dao/classes/Items.dao.js";

export default class ItemsRepository {

  constructor() {
    this.dao = new ItemsDao();
  }

  getItems = async () => {
    const result = await this.dao.getItems();
    return result;
  };
  createItem = async (item) => {
    const result = await this.dao.createItem(item);
    return result;
  };
  deleteItem = async (id) => {
    const result = await this.dao.deleteItem(id);
    return result;
  };
updateItem = async (id) => {
    const result = await this.dao.updateItem(id);
    return result;
  };
}
