import {mongoose} from'mongoose';
const { Schema } = mongoose;
const mesaCollections='mesas'
const mesaSchema = new Schema({

mesa:{type:String, required: true}

})

export const mesaModel= mongoose.model(mesaCollections,mesaSchema)