import comandaModel from '../Models/comandas.model.js';
import itemModel from '../Models/items.model.js';


export default class ComandasDao {
  getComandas = async () => {
    const comandas = await comandaModel.find()
    return comandas;
  };

  getComandasForCocina = async () => {
    const result = await comandaModel.find()
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
  // 1. Crea una comanda sin los items
  const comandaCreated = await comandaModel.create(comanda);

  // 2. Inserta los items en la base de datos
  const itemsGuardados = await itemModel.insertMany(comanda.items);

  // 3. Asigna los IDs de los items a la comanda
  comandaCreated.items = itemsGuardados.map((e) => ({ item: e._id }));

  // 4. Guarda la comanda
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

  updateComanda = async (id, comanda) => {
    const result = await comandaModel.findByIdAndUpdate(id, comanda);
    return result;
  };
}