
import { combineReducers } from 'redux';
import mesasReducer from './mesas.reducer.js';
import cajaReducer from './caja.reducer.js';
import dashboardReducer from './dashboard.reducer.js';
import homeReducer from './home.reducer.js';
import landingReducer from './landing.reducer.js';
import loginReducer from './login.reducer.js';
import registerReducer from './register.reducer.js';
import usersReducer from './users.reducer.js';
import cocinaReducer from './cocina.reducer.js'

const rootReducer = combineReducers({
  mesasReducer: mesasReducer,
  cajaReducer:cajaReducer,
  dashboardReducer:dashboardReducer,
  homeReducer:homeReducer,
  landingReducer:landingReducer,
  loginReducer :loginReducer ,
  registerReducer:registerReducer,
  usersReducer:usersReducer,
  cocinaReducer:cocinaReducer
});

export default rootReducer;
















// const initialState = {
//   products: [],
//   categories: [],
//   detail: [],
//   mesas: [],
//   copiaProducts: [],
//   user: [],
//   productoItem: [],
//   precioItem: [],
//   cantidadItem: [],
//   subtotalItem: [],
//   total: [0],
//   comanda: [],
//   PostComanda: [],
//   MesaComanda: [],
//   item: [],
//   itemsTotal: [],
//   itemSelected: [],
//   message: [],
//   idComanda: [],
//   resultCreateUser: [],
//   resultLogin: []

// };




// function rootReducer(state = initialState, action) {
//   switch (action.type) {

//     case "GET_ALL_PRODUCTS":
//       return { ...state, products: action.payload, copiaproducts: action.payload, };
//     case "GET_ALL_CATEGORIES":
//       return { ...state, categories: action.payload };
//     case "GET_ALL_MESAS":
//       return { ...state, mesas: action.payload };
//     case "GET_COMANDA_ID":
//       return { ...state, comanda: action.payload };
//     case "GET_USER_BY_NAME":
//       return { ...state, user: action.payload };
//     case "INCREMENTAR_CANTIDAD":
//       state.cantidadItem++
//       return {
//         ...state, cantidad: action.cantidadItem, producto: state.productoItem,
//         subtotal: state.subtotalItem
//       };
// case 'ITEM_SELECTED': state.itemSelected.length===0?state.itemSelected=action.payload
// :state.itemSelected=action.payload
// return{...state, itemSelected:state.itemSelected};
// case 'DECREMENTAR_CANTIDAD':
//   state.cantidadItem--
//   return {
//     ...state, cantidad: action.cantidadItem, producto: state.productoItem,
//     subtotal: state.subtotalItem
//   };


//     case "ACTUALIZAR_COMANDA_CANTIDAD":
//       return { ...state, cantidadItem: state.cantidadItem };
//     case "ACTUALIZAR_COMANDA_MESA":
//       return { ...state, MesaComanda: action.payload }
//     case "ACTUALIZAR_COMANDA_ITEM_PRODUCTO":
//       return {
//         ...state,
//         comanda: {
//           ...state.comanda,
//           comanda: { item: { product: action.payload } },
//         },
//       };
//     case "ACTUALIZAR_PRODUCTO":
//       state.precioItem = action.payload[0].precio
//       return { ...state, productoItem: action.payload, precioItem: action.payload[0].precio };
//     case "CALCULAR_SUBTOTAL":
//       state.subtotalItem = Number(state.cantidadItem) * Number(state.precioItem)
//       return { ...state, subtotal: state.subtotalItem };
//     case "ACTUALIZAR_ITEM":
//       return {
//         ...state,
//         item: [
//           {
//             cantidad: action.payload.cantidad,
//             product: action.payload.product,
//             price: action.payload.precio,
//           },
//         ],
//       };

//     case 'CALCULAR_TOTAL':
//       return { ...state, total: Number(action.payload) }
//     case 'CONFIRMAR_ITEM':
 

//       return { ...state, itemsTotal: [...state.itemsTotal,action.payload] }
//     case 'LIMPIAR_ESTADOS':
//       return { ...state, productoItem: [], cantidadItem: [], subtotalItem: [] }
//     case 'POST_COMANDA':
//       return { ...state, PostComanda: action.payload }
//     case 'CLEAR_MESSAGES':
//       return { ...state, message: action.payload }
//     case 'ACTUALIZAR_ITEMS_TOTAL': state.itemsTotal=[]
//       return { ...state, itemsTotal: [ ...action.payload ] }
//     case 'ACTUALIZAR_COMANDA':
//       state.comanda = action.payload
//       return { ...state, comanda: action.payload }
//     case 'CREAR_USUARIO':

    
//       return { state, resultCreateUser: action.payload }
//     case 'LOGIN':
//       state.resultLogin = action.status
//       state.user=action.payload[0]
 
//       return { ...state, resultLogin: Number(action.status), user:state.user }
//     case 'LOGOUT':
//       return { ...state, resultLogin: action.payload }

//       // case 'CLEAR_PRODUCTS_SELECTOR':
//       //   return{...state,products:action.payload}
//     default: return state
//   }
// }

// export default rootReducer;
  