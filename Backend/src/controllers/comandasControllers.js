import { getNameMozo } from "../controllers/usersControllers.js";
import { getItems } from "../controllers/itemsControllers.js";
export async function getAllComandas(comandasGet) {
  const salidaComanda = [];
  for (let i = 0; i < comandasGet.length; i++) {
    let mozoName = await getNameMozo(comandasGet[i].mozo);
    let salida = {
      id: comandasGet[i]._id,
      date: comandasGet[i].date,
      mesa: comandasGet[i].mesa,
      estado: comandasGet[i].estado,
      mozo: mozoName,
      total: comandasGet[i].total,
      items: await getItems(comandasGet[i]),
    };
    salidaComanda.push(salida);
  }
  return salidaComanda;
}
