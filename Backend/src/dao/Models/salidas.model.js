import {mongoose} from "mongoose";
const {schema}=mongoose
const SalidaCollections = "Salidas";
const SalidaSchema= new schema({
date: { type: Date, required: true },
monto: { type: Number, required: true},
description:{Type: String, required: true},
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