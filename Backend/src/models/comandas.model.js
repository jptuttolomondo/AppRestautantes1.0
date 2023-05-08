import {mongoose} from'mongoose';
const { Schema } = mongoose;
import { itemModel } from './items.model.js';


const schema = new Schema(
  {
  date: { type: Date, required: true },
   mesa: { type:String,enum:['A','B','C','D','E','F','G','H','I','J','K','L','M','N'], required: true },
  estado:{type:String,enum:['PENDIENTE','COBRADO','PREPARANDO','SERVIDO','TOMADO','MODIFICADO','LISTO PARA SERVIR'],required: true },
  mozo:{ type: String, required: true},
total: { type: Number, required: true},
items:{ type:
[
{
  item:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'items'
  }
}
]
},

payDay: { type: Number, required: true},
deleted:{type:Boolean,required: true, default: false},




/*const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: String,
  precio: Number
});

const tiendaSchema = new mongoose.Schema({
  nombre: String,
  productos: [productoSchema]
});

const Tienda = mongoose.model('Tienda', tiendaSchema);
*/
  }
)
export const comandaModel = mongoose.model('comanda', schema);
