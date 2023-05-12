import {mongoose} from 'mongoose'
const {Schema} = mongoose
const itemCollections='items'
const itemSchema= new Schema({
cantidad: {type:Number, required: true},
//producto: {type:String, required: true},//referir
producto:{type:mongoose.Schema.Types.ObjectId,ref:'products'},
subtotalItem: {type:Number, required: true},
deleted: {type:Boolean, required: true},
comanda:{type:Array,default:[]} //hay que refeirlos a items!!!

},
{timestamps:true}); 
export const itemModel = mongoose.model(itemCollections,itemSchema);
export {itemSchema}