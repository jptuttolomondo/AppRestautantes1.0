import CajasRepository from '../repositories/cajas.repository.js';

const cajasRepository = new CajasRepository();

const createCaja = async(caja) => {

    const result = await cajasRepository.createCaja(caja);
    return result;
}

const getCajas = async () => {
    const result = await cajasRepository.getCajas();
    return result;
}


const deleteCaja = async (id) => {
    const result = await cajasRepository.deleteCaja(id);
    return result;
}

 const updateCaja = async (id,caja) => {
    const result = await cajasRepository.updateCaja(id,caja);
    return result;
}
const getCajaById = async (id) => {
    const result = await cajasRepository.getCajaById(id);
    return result;
}


export {
    createCaja,
    getCajas,
    deleteCaja,
    updateCaja,
    getCajaById
}