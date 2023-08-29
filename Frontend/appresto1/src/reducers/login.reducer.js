import { LOGIN,LOGOUT } from '../actions/login.actions.js';

const initialStateLogin = {
  resultLogin: [],
     user: [],
};

const loginReducer = (state = initialStateLogin, action) => {
  switch (action.type) {
     case LOGIN:
     // state.resultLogin = action.status
      //state.user=action.payload[0]
      return { ...state, resultLogin: Number(action.status), user:action.payload[0] }
    case LOGOUT:
      return { ...state, resultLogin: action.payload }
    default:
      return state;
  }
};

export default loginReducer;