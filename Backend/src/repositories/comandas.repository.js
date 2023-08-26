import ComandasDao from "../dao/classes/Comandas.dao.js";
import ItemsDao from "../dao/classes/Items.dao.js"

export default class ComandasRepository {

  constructor() {
    this.dao = new ComandasDao();
  }

  getComandas = async () => {
    const result = await this.dao.getComandas();
    return result;
  };

  comandaCreatedVerify=async(comanda)=>{
    const result = await this.dao.comandaCreatedVerify(comanda);
    return result
  }

  createComanda = async (comanda) => {


    const result = await this.dao.createComanda(comanda);
    console.log(result)
    //const resultItems=await this.dao.createItem(comanda.items)

    return result;
  };
  deleteComanda = async (id) => {
    const result = await this.dao.deleteComanda(id);
    return result;
  };
}
