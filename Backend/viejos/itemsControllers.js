// import { itemModel } from "../dao/Models/items.model.js";
// import { getProductName } from "./productsControllers.js";

// export async function getItems(Comanda) {
//   const ItemGetted = await itemModel.find({ comanda: Comanda._id });
//   let salida = [];

//   for (let i = 0; i < ItemGetted.length; i++) {
//     let ItemSalida = {
//       cantidad: ItemGetted[i].cantidad,
//       producto: await getProductName(ItemGetted[i].producto),
//       subtotalItem: ItemGetted[0].subtotalItem,
//     };
//     salida.push(ItemSalida);
//   }

//   return salida;
// }
