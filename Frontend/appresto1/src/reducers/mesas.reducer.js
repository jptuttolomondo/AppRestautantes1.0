import {
  ITEM_SELECTED,
  ACTUALIZAR_ITEMS_TOTAL,
  POST_COMANDA,
  ACTUALIZAR_PRODUCTO,
  CALCULAR_SUBTOTAL,
  ACTUALIZAR_COMANDA_MESA,
  CALCULAR_TOTAL,
  GET_ALL_PRODUCTS,
  GET_ALL_MESAS,
  CONFIRMAR_ITEM,
  INCREMENTAR_CANTIDAD,
  DECREMENTAR_CANTIDAD,
  LIMPIAR_ESTADOS,
} from "../actions/mesas.actions.js";

const initialState = {
  products: [],
  mesas: [],
  productoItem: [],
  precioItem: [],
  cantidadItem: [],
  subtotalItem: [],
  total: [0],
  PostComanda: [],
  MesaComanda: [],
  itemsTotal: [],
  itemSelected: [],
};

const mesasReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return { ...state, products: action.payload };

    case GET_ALL_MESAS:
      return { ...state, mesas: action.payload };

    case INCREMENTAR_CANTIDAD:
      return {
        ...state,
        cantidadItem: action.payload,
        producto: state.productoItem,
        subtotal: state.subtotalItem,
      };
    case ITEM_SELECTED:
      return { ...state, itemSelected: action.payload };

    case DECREMENTAR_CANTIDAD:
      return {
        ...state,
        cantidadItem: action.payload,
        producto: state.productoItem,
        subtotal: state.subtotalItem,
      };

    case ACTUALIZAR_COMANDA_MESA:
      return { ...state, MesaComanda: action.payload };

    case ACTUALIZAR_PRODUCTO:
      return {
        ...state,
        productoItem: action.payload,
        precioItem: action.payload[0].precio,
      };

    case CALCULAR_SUBTOTAL:
      return {
        ...state,
        subtotalItem: Number(state.cantidadItem) * Number(state.precioItem),
      };

    case CALCULAR_TOTAL:
      return { ...state, total: Number(action.payload) };

    case CONFIRMAR_ITEM:
      return { ...state, itemsTotal: [...state.itemsTotal, action.payload] };

    case LIMPIAR_ESTADOS:
      return { ...state, productoItem: [], cantidadItem: [], subtotalItem: [] };

    case POST_COMANDA:
      return { ...state, PostComanda: action.payload };

    case ACTUALIZAR_ITEMS_TOTAL:
      return { ...state, itemsTotal: [...action.payload] };

    default:
      return state;
  }
};

export default mesasReducer;
