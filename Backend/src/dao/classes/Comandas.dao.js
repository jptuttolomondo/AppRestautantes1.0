import comandaModel from '../Models/comandas.model.js';

export default class ComandasDao {
  getComandas = async () => {
    const result = await comandaModel.find();
    return result;
  };
  comandaCreatedVerify = async (comanda) => {

   const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000); // Restar 5 minutos en milisegundos
    const result = await comandaModel.exists({
      mesa:comanda.mesa,
      createdAt: { $gte: fiveMinutesAgo },
      estado:"PENDIENTE"
    });

    if (result) return true;
    else return false;

  };
  getComandaById = async (id) => {
    const result = await comandaModel.find({ _id: id });
    return result;
  };
  deleteComanda = async (id) => {
    const result = await comandaModel.delete(id);
    return result;
  };

  createComanda = async (comanda) => {
    const result = await comandaModel.create(comanda);
    return result;
  };
  updateComanda = async (id, comanda) => {
    const result = await comandaModel.findByIdAndUpdate(id, comanda);
    return result;
  };
}