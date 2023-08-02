import { mongoose } from "mongoose";
const { Schema } = mongoose;
const itemCollections = "items";
const itemSchema = new Schema(
  {
    cantidad: { type: Number, required: true },
    producto: { type: mongoose.Schema.Types.ObjectId, ref: "products" },
    subtotalItem: { type: Number, required: true },
    deleted: { type: Boolean, required: true },
    comanda: { type: Array, default: [] },
  },
  { timestamps: true }
);
const itemModel = mongoose.model(itemCollections, itemSchema);
//export { itemSchema };
export default itemModel