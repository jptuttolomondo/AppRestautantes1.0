// import{createStore,applyMiddleware}from "redux"
// import {composeWithDevTools}from "redux-devtools-extension"
// import thunk from "redux-thunk"
// import rootReducer from "../reducer/index.js"
// export const store= createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))


import { configureStore } from '@reduxjs/toolkit';

import rootReducer from '../reducers/index.js';

const store = configureStore({
  reducer: rootReducer,
  // Puedes agregar opciones adicionales aquí si es necesario
});

export default store;
