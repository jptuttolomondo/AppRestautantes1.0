import ComandasRepository from '../repositories/comandas.repository.js';

const comandasRepository = new ComandasRepository();

const createComanda = async(comanda) => {
  
    const result = await comandasRepository.createComanda(comanda);
    return result;
}

const getComandas = async () => {
    const result = await comandasRepository.getComandas();
    return result;
}


const deleteComanda = async (id) => {
    const result = await comandasRepository.deleteComanda(id);
    return result;
}

export {
    createComanda,
    getComandas,
    deleteComanda
}