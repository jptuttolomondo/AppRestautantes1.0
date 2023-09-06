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

 ComandaSchema.pre("findOneAndUpdate", async function (next) {
  next();
});
 const comandaModel = mongoose.model(ComandaCollections, ComandaSchema);
export default comandaModel