import {mongoose} from'mongoose';
const { Schema } = mongoose;
const productCollections='products'
const productSchema = new Schema(
  {
    productName: { type: String, required: true },

image:{ type:String, required: true },
category:{type:String ,
    enum:['Desayunos y Meriendas','Bebidas','Aperitivos','Platos con carne',
'Tortas y Postres','Sopas','Varios'], 
required: true }, 

description:{ type: String, required: true },
precio:{ type:Number, required: true },
stock:{ type:Number, required: true },
deleted:{ type:Boolean, required: true,default:false},
  }
)
export const productModel = mongoose.model(productCollections, productSchema);