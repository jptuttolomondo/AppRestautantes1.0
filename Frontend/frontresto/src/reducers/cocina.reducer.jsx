import {
    GET_COMANDAS_FOR_COCINA, 
    GET_COMANDA_BY_ID,
    CHANGE_STATE_COMANDA
}from '../actions/cocina.actions.jsx'

const initialStateCocina = {
    getComandasForCocina:[],
    getComandaById:[],
   // ChangeStateComanda:[],

  };
  
  const cocinaReducer = (state = initialStateCocina, action) => {
    switch (action.type) {
     case GET_COMANDAS_FOR_COCINA:
         return {...state, getComandasForCocina: action.payload }
    case GET_COMANDA_BY_ID:   return {...state, getComandaById: action.payload }
    case CHANGE_STATE_COMANDA:   return {...state, getComandaById:action.payload} 
   
      default:
        return state;
    }
  };
  
  export default cocinaReducer;