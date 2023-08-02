import MesasDao from '../dao/classes/Mesas.dao.js';

export default class MesasRepository {
    constructor() {
        this.dao = new MesasDao();
    }

    getMesas = async () => {
        const result = await this.dao.getMesas();
        return result;
    }
    createMesa = async (mesa) => {
        const result = await this.dao.createMesa(mesa);
        return result;
    }
        deleteMesa = async (id) => {
        const result = await this.dao.deleteMesa(id);
        return result;
    }
   }