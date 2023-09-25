import SalidasRepository from '../repositories/salidas.repository.js';

const salidasRepository = new SalidasRepository();

const createSalida = async(salida) => {

    const result = await salidasRepository.createSalida(salida);
    return result;
}

const getSalidas = async () => {
    const result = await salidasRepository.getSalidas();
    return result;
}


const deleteSalida = async (id) => {
    const result = await salidasRepository.deleteSalida(id);
    return result;
}

 const updateSalida = async (id,salida) => {
    const result = await salidasRepository.updateSalida(id,salida);
    return result;
}

const getSalidaById = async (id) => {
    const result = await salidasRepository.getSalidaById(id);
    return result;
}


export {
    createSalida,
    getSalidas,
    deleteSalida,
    updateSalida,
    getSalidaById
}