import ComandasDao from "../dao/classes/Comandas.dao.js";

export default class ComandasRepository {
  constructor() {
    this.dao = new ComandasDao();
  }

  getComandas = async () => { 
    const result = await this.dao.getComandas();
    return result;
  };
  putComanda = async (id,comanda) => {
    const result = await this.dao.putComanda(id,comanda);
    return result;
  };

  



  getComandaById = async (id) => {
    const result = await this.dao.getComandaById(id);
console.log(result)
    return result;
  };

  comandaCreatedVerify=async(comanda)=>{
    const result = await this.dao.comandaCreatedVerify(comanda);
    return result
  }

  createComanda = async (comanda) => {
    const result = await this.dao.createComanda(comanda);
    return result;
  };

  deleteComanda = async (id) => {
    const result = await this.dao.deleteComanda(id);
    return result;
  };

  getComandasForCocina = async () => {
    const result = await this.dao.getComandasForCocina();
    return result;
  };
}
