import mesaModel from '../Models/mesas.model.js';

export default class MesasDao {
    getMesas = async () => {
        const result = await mesaModel.find();
        return result;
    }

    deleteMesa = async (id) => {
        const result = await mesaModel.delete(id);
        return result;
    }

    createMesa = async (mesa) => {
        const result = await mesaModel.create(mesa);
        return result;
    }


}