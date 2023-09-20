//import { LOGIN,LOGOUT } from '../actions/login.actions.js';
const initialState = {
  mesas: [],
};

const homeReducer = (state = initialState, action) => {
 switch (action.type) {
//     case LOGIN:
//       // Lógica para actualizar el estado de las mesas
//       return state;
    default:
      return state;
  }
};

export default homeReducer;