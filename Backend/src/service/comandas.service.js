import ComandasRepository from '../repositories/comandas.repository.js';

const comandasRepository = new ComandasRepository();

const createComanda = async(comanda) => {
  
    const result = await comandasRepository.createComanda(comanda);
    return result;
}

const putComanda = async(id,comanda) => {
  
    const result = await comandasRepository.putComanda(id,comanda);
    return result;
}


const getComandas = async () => {
    const result = await comandasRepository.getComandas();
    return result;
}

const getComandasForCocina = async () => {
    const result = await comandasRepository.getComandasForCocina();
    return result;
}
const getComandaById = async (id) => {
  
    const result = await comandasRepository.getComandaById(id);
    return result;
}
const comandaCreatedVerify=async(comanda)=>{
    const result = await comandasRepository.comandaCreatedVerify(comanda);
    return result;
}

const deleteComanda = async (id) => {
    const result = await comandasRepository.deleteComanda(id);
    return result;
}

export {
    createComanda,
    getComandas,
    deleteComanda,
    comandaCreatedVerify,
    getComandasForCocina,
    getComandaById,
    putComanda,

}