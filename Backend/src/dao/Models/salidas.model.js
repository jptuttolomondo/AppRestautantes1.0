import {mongoose} from "mongoose";
const {Schema}=mongoose
const SalidaCollections = "Salidas";
const SalidaSchema= new Schema({

monto: { type: Number, required: true},
description:{type: String, required: true},
createdAt: {type: Date,default: Date.now}

})


SalidaSchema.pre("save", async function (next) {
    next()
   });
  
   SalidaSchema.pre("findOneAndUpdate", async function (next) {
    next();
  });
   const salidaModel = mongoose.model(SalidaCollections, SalidaSchema);
  export default salidaModel