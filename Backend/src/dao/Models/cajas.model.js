import {mongoose} from "mongoose";
const {Schema}=mongoose
const CajaCollections = "Cajas";
const CajaSchema= new Schema({
   
    montoInicial: { type: Number, required: true},
    totalEntradas: { type: Number, required: true},
    totalSalidas: { type: Number, required: true},
    salidasCaja: {
        type:[{
            salidaCaja:{type:mongoose.Types.ObjectId,
            ref:'Salidas'}
        }
    ],
    default: [],
},

entradasCaja: {
    type:[{
        entradaCaja:{type:mongoose.Types.ObjectId,
        ref:'Comandas'}
    }

],
default: [],
},
user:{type:mongoose.Types.ObjectId,ref:'users'},

},
{ timestamps: true },
)


CajaSchema.pre("save", async function (next) {
    next()
   });
  
CajaSchema.pre("findOneAndUpdate", async function (next) {
    next();
  });
   const cajaModel = mongoose.model(CajaCollections, CajaSchema);
  export default cajaModel