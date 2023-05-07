import { time } from 'console';
import {mongoose} from'mongoose';
const { Schema } = mongoose;


const schema = new Schema(
  {
  date: { type: Date, required: true },
  //time: { type:, required: true },
  mesa: { type:DataTypes.ENUM('A','B','C','D','E','F','G','H','I','J','K','L','M','N'), required: true },
  estado:{type:DataTypes.ENUM('PENDIENTE','COBRADO','PREPARANDO','SERVIDO','TOMADO','MODIFICADO','LISTO PARA SERVIR'),required: true },
  mozo:{ type: String, required: true},
total: { type: Number, required: true},

payDay: { type: Number, required: true},
deleted:{type:Boolean,required: true, default: false},
  /*  {
      "date":"date",
      "time":"time",
      "mesa":"char",
      "mozo":"string",
"total":4500,
"estado": "tipo",
"pedido":[
  {"cantidad":5, 
  "nombreProducto":"cafe con leche",
  "precioUnitario":200,
  "subtotal":1000    
   },{
    "cantidad":10, 
  "nombreProducto":"medialunas",
  "precioUnitario":200,
  "subtotal":2000 
   },
   {     "cantidad":3, 
   "nombreProducto":"coca cola",
   "precioUnitario":500,
   "subtotal":1500 }
  },
  { timestamps: true }
);

schema.plugin(require('mongoose-autopopulate'));
*/



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
const model = mongoose.model('comanda', schema);
module.exports = model; 