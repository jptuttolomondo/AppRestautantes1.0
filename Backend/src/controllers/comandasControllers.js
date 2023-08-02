import { getNameMozo } from "./users.controllers.js";
import { getItems } from "../controllers/itemsControllers.js";
export async function getAllComandas(comandasGet) {
  const salidaComanda = [];
  for (let i = 0; i < comandasGet.length; i++) {
    let salida = {
      id: comandasGet[i]._id,
      date: comandasGet[i].date,
      mesa: comandasGet[i].mesa,
      estado: comandasGet[i].estado,
      mozo: await getNameMozo(comandasGet[i].mozo),
      total: comandasGet[i].total,
      items: await getItems(comandasGet[i]),
    };
    salidaComanda.push(salida);
  }//hay que pushear en comandas.items
  return salidaComanda;
}
