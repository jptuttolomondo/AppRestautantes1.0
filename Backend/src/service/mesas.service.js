import MesasRepository from '../repositories/mesas.repository.js';

const mesasRepository = new MesasRepository();

const createMesa = async(mesa) => {
    //Valido el stock del producto
    // if (si no pasamos la validadion) {
    //     throw new StockError('stock');
    // }
    const result = await mesasRepository.createMesa(mesa);
    return result;
}

const getMesas = async () => {
    const result = await mesasRepository.getMesas();
    return result;
}


const deleteMesa = async (id) => {
    const result = await mesasRepository.deleteMesa(id);
    return result;
}

export {
    createMesa,
    getMesas,
    deleteMesa
}