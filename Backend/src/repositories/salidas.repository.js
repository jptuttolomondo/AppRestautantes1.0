import SalidasDao from '../dao/classes/salidas.dao.js';

export default class SalidasRepository {
    constructor() {
        this.dao = new SalidasDao();
    }

    getSalidas = async () => {
        const result = await this.dao.getSalidas();
        return result;
    }
    createSalida = async (salida) => {
        const result = await this.dao.createSalida(salida);
        return result;
    }
        deleteSalida = async (id) => {
        const result = await this.dao.deleteSalida(id);
        return result;
    }

    updateSalida = async (id,salida) => {
        const result = await this.dao.updateSalida(id,salida);
        return result;
    }

    getSalidaById=async (id) => {
        const result = await this.dao.updateSalida(id);
        return result;
    }
   }