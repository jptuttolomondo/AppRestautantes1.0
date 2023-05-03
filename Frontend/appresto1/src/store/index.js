import rootReducer from "../redux"
import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'
export const store = configureStore({
  middleware: [thunkMiddleware],
  reducer: rootReducer
  })
