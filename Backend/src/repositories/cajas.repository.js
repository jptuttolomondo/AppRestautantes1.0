import CajasDao from '../dao/classes/cajas.dao.js';

export default class ProductsRepository {
    constructor() {
        this.dao = new CajasDao();
    }

    getCajas = async () => {
        const result = await this.dao.getCajas();
        return result;
    }
    createCaja = async (caja) => {
        const result = await this.dao.createCaja(caja);
        return result;
    }
        deleteCaja = async (id) => {
        const result = await this.dao.deleteCaja(id);
        return result;
    }

    updateCaja = async (id,caja) => {
        const result = await this.dao.updateCaja(id,caja);
        return result;
    } 
    getCajaById = async (id) => {
    const result = await this.dao.getCajaById(id);
    return result;
}
   }
  
