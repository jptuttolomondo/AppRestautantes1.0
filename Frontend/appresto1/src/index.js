import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// import dotenv from 'dotenv'
// dotenv.config() 

// //axios.defaults.baseURL=process.env.REACT_APP_API ||'http://localhost:3001';
// axios.defaults.baseURL="https://pi-videogames-production-f9c4.up.railway.app/"||'http://localhost:3001'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
