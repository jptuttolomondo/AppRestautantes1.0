import { mongoose } from "mongoose";
const { Schema } = mongoose;
const itemCollections = "items";
const itemSchema = new Schema(
  {
    cantidad: { type: Number, required: true },
    producto: { type: mongoose.Schema.Types.ObjectId, ref: "products",required:true },
    subtotalItem: { type: Number, required: true },
  },
  { timestamps: true }
);


const itemModel = mongoose.model(itemCollections, itemSchema);

export default itemModel

