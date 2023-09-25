import cajaModel from '../Models/cajas.model.js';
import{createSalida}from'../../service/salidas.service.js'

export default class ProductsDao {
    getCajas = async () => {
        const result = await cajaModel.find();
        return result;
    }
    getCajaById = async (id) => {
        const result = await cajaModel.find({_id:id});
        return result;
    }
    deleteCaja = async (id) => {
        const result = await cajaModel.delete(id);
        return result;
    }

    createCaja = async (caja) => {//creo una caja vacia
        let caja1={
            
                montoInicial:0,
                totalEntradas:0,
                totalSalidas:0 ,
                salidasCaja:[],
                entradasCaja:[],
              

        }
        const result = await cajaModel.create(caja1);//tengo un caja._id
        //crear una salida vacia para obtener un _id de salida
       // let salidaVacia={ monto:0, description:'' }
//let salidaInicial=createSalida(salidaVacia)
      //  const salidaDeCaja=  await cajaModel.create({
           // salidaInicial) 
        return result;
    }


    // createComanda = async (comanda) => {
    //     const comandaCreated = await comandaModel.create(comanda);
    //     const itemsGuardados = await itemModel.insertMany(comanda.items);
    //     comandaCreated.items = itemsGuardados.map((e) => ({ item: e._id }));
    //     await comandaCreated.save();
    //     const finder = await comandaModel.findById(comandaCreated._id).populate({
    //       path: "items.item",
    //       populate: {
    //         path: "producto",
    //         model: "products",
    //       },
    //     });
      
    //     console.log(JSON.stringify(finder, null, '\t'));
      
    //     return comandaCreated;
    //   };






    updateCaja = async (id, caja) => {
        const result = await cajaModel.findOneAndUpdate({ _id: id}, caja);
        return result;
    }
  
}