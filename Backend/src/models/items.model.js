import {mongoose} from 'mongoose'
const {Schema} = mongoose
const itemCollections='items'
const itemSchema= new Schema({
cantidad: {type:Number, required: true},
producto: {type:String, required: true},//referir
subtotalItem: {type:Number, required: true},
deleted: {type:Boolean, required: true},


},
{timestamps:true}); 
export const itemModel = mongoose.model(itemCollections,itemSchema);