import salidaModel from '../Models/salidas.model.js';

export default class SalidasDao {
    getSalidas = async () => {
        const result = await salidaModel.find();
        return result;
    }
    getSalidaById = async (id) => {
        const result = await salidaModel.find({_id:id});
        return result;
    }
    deleteSalida = async (id) => {
        const result = await salidaModel.delete(id);
        return result;
    }

    createSalida = async (salida) => {
        const result = await salidaModel.create(salida);
        return result;
    }
    updateSalida = async (id, salida) => {
        const result = await salidaModel.findByIdAndUpdate(id, salida);
        return result;
    }
 
}