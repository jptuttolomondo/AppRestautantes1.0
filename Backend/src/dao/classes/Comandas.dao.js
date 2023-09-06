import comandaModel from '../Models/comandas.model.js';
import itemModel from '../Models/items.model.js';


export default class ComandasDao {
  getComandas = async () => {
    console.log('find')
    const comandas = await comandaModel.find()
    return comandas;
  };

  getComandasForCocina = async () => {
  
    const result = await comandaModel.find( {estado: { $in: ['PREPARANDO', 'TOMADO'] }})//find()
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
    console.log(id)
    const result = await comandaModel.findById({ _id: id });
    
    return result;
  };
  deleteComanda = async (id) => {
    const result = await comandaModel.delete(id);
    return result;
  };

//   createComanda = async (comanda) => {
//         const comandaCreated = await comandaModel.create(comanda);
//        const itemsGuardados=await itemModel.insertMany(comanda.items)  
//  comandaCreated.items = itemsGuardados.map(e => ({item: e._id}));
// await comandaModel.updateOne({_id:comandaCreated._id},comanda)
//   const result=await comandaCreated.save()
//  const finder=await comandaModel.findById(comandaCreated._id)
//  .populate({
//    path: "items.item",
//    populate: {
//      path: "producto", 
//      model: "products", 
//    },
//  })
//  .exec();
//  console.log(JSON.stringify(finder, null, '\t'));

//         return result;

//   };
createComanda = async (comanda) => {
  const comandaCreated = await comandaModel.create(comanda);
  const itemsGuardados = await itemModel.insertMany(comanda.items);
  comandaCreated.items = itemsGuardados.map((e) => ({ item: e._id }));
  await comandaCreated.save();
  const finder = await comandaModel.findById(comandaCreated._id).populate({
    path: "items.item",
    populate: {
      path: "producto",
      model: "products",
    },
  });

  console.log(JSON.stringify(finder, null, '\t'));

  return comandaCreated;
};

  putComanda = async (id, comanda) => {
    //console.log(id,comanda)
    const result = await comandaModel.findOneAndUpdate({ _id: id},  comanda);
    return result;
  };
}