import {mongoose} from'mongoose';
import {itemSchema}from './items.model.js';
const { Schema } = mongoose;
const ComandaCollections='Comandas'


const schema = new Schema(
  {
  date: { type: Date, required: true },
   mesa: { type:String,enum:['A','B','C','D','E','F','G','H','I','J','K','L','M','N'], required: true },
  estado:{type:String,enum:['PENDIENTE','COBRADO','PREPARANDO','SERVIDO','TOMADO','MODIFICADO','LISTO PARA SERVIR'],required: true },
  mozo:{ type: String, required: true},
  items:[itemSchema],
total: { type: Number, required: true},

deleted:{type:Boolean,required: true, default: false},
}
 
)
export const comandaModel = mongoose.model(ComandaCollections, schema);
