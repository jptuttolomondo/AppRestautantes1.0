import { mongoose } from "mongoose";
const { Schema } = mongoose;
const userCollections = "users";
const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dni: { type: Number, required: true },
    address: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    inputDate: { type: Date, required: true },
    role: { type: String, enum: ["ADMIN", "USER"] },
    payDay: { type: Number, required: true },
    deleted: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

 const userModel = mongoose.model(userCollections, userSchema);
export default userModel
