import { mongoose } from "mongoose";
const { Schema } = mongoose;
const mesaCollections = "mesas";
const mesaSchema = new Schema({
  mesa: { type: String, required: true },
});

const mesaModel = mongoose.model(mesaCollections, mesaSchema);
export default mesaModel