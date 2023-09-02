import {
    GET_COMANDAS_FOR_COCINA, 
}from '../actions/cocina.actions.js'

const initialStateCocina = {
    getComandasForCocina:[],
  };
  
  const cocinaReducer = (state = initialStateCocina, action) => {
    switch (action.type) {
     case GET_COMANDAS_FOR_COCINA:
         return {...state, getComandasForCocina: action.payload }
      default:
        return state;
    }
  };
  
  export default cocinaReducer;