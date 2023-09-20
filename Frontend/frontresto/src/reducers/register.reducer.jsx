import { CREAR_USUARIO } from '../actions/register.actions.jsx';

const initialState = {
  resultCreateUser:[]
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREAR_USUARIO:  return { state, resultCreateUser: action.payload }
    default:
      return state;
  }
};

export default registerReducer;