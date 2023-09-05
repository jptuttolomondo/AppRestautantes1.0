import { mongoose } from "mongoose";
const { Schema } = mongoose;
const ComandaCollections = "Comandas";
const ComandaSchema = new Schema({
  date: { type: Date, required: true },
  mesa: {
    type: String,
    enum: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
    ],
    required: true,
  },
  estado: {
    type: String,
    enum: [
      "PENDIENTE",
      "COBRADO",
      "PREPARANDO",
      "SERVIDO",
      "TOMADO",
      "MODIFICADO",
      "LISTO PARA SERVIR",
    ],
    required: true,
  },
  mozo: {    type: mongoose.Schema.Types.ObjectId, required: true ,ref: 'users' },
  items: {
    type: [
        {
            item: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'items'
            }
          
        }
    ],
    default: [],
  },
  total: { type: Number, required: true },
  deleted: { type: Boolean, required: true, default: false },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
ComandaSchema.pre("find", function () {
 this.populate({
path:'mozo',
      model:"users"})
      .populate({
    path: 'items.item',
    populate: {
      path: 'producto',
      model: 'products', 
   },
    

});
})

ComandaSchema.pre("save", async function (next) {
  next()
 });

 ComandaSchema.pre("findOneAndUpdate", async function () {
  const update = this._update;
  const comandaId =new mongoose.Types.ObjectId (this._conditions._id);
  // Supongamos que tienes el ID de la comanda que deseas actualizar y los nuevos datos en `updateData`.
 // const comandaId = new mongoose.Types.ObjectId(this._update._id); // Reemplaza esto con el ID correcto
  const updateData = update;
console.log(comandaId)

  // Paso 1: Obtén la comanda actual y sus elementos 'items' usando populate.
  const comanda = await comandaModel
    .findById({_id:comandaId})
    .populate({
      path:'mozo',
            model:"users"})
            .populate({
          path: 'items.item',
          populate: {
            path: 'producto',
            model: 'products', 
         },
          
      
      });
console.log('comanda',comanda)
  // Paso 2: Actualiza los elementos 'items' en la comanda con los nuevos datos.
  comanda.items.forEach((itemToUpdate) => {
    const updatedItem = updateData.items.find((updated) =>
      updated._id.equals(itemToUpdate.item._id)
    );

    if (updatedItem) {
      // Actualiza los campos del elemento según los datos de actualización.
      itemToUpdate.item.cantidad = updatedItem.cantidad;
      itemToUpdate.item.producto = updatedItem.producto;
      itemToUpdate.item.subtotalItem = updatedItem.subtotalItem;
    }
  });

  // Paso 3: Guarda la comanda actualizada.
  await comanda.save();
});

 const comandaModel = mongoose.model(ComandaCollections, ComandaSchema);
export default comandaModel