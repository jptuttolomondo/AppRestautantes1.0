import ComandasDao from "../dao/classes/Comandas.dao.js";

export default class ComandasRepository {

  constructor() {
    this.dao = new ComandasDao();
  }

  getComandas = async () => {
    const result = await this.dao.getComandas();
    return result;
  };
  createComanda = async (comanda) => {
    const result = await this.dao.createComanda(comanda);
    return result;
  };
  deleteComanda = async (id) => {
    const result = await this.dao.deleteComanda(id);
    return result;
  };
}
