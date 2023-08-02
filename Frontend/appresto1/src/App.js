
import {Route,Routes} from 'react-router-dom'
import {Landing} from'./components/landing.js'
import { Home } from "./components/home.js";
import {AtencionMesasPortada} from './components/atencionMesasPortada.js'
import { AtencionMesas } from './components/atencionMesas.js';
import {Cocina} from './components/cocina.js';
import {Caja} from  './components/caja.js';
import { Login } from './components/login.js';
import {Quit} from  './components/quit.js';
import { Zoom } from './components/zoom.js';
import {Register}from './components/register.js'
//import axios from 'axios'
import './App.css';

//import { useEffect } from 'react';



function App() {
// const url='http://localhost:8080'
// async function lee(){
   
//       const res=await axios.get(`${url}/products`)
//       console.log(res)
// } 
// useEffect(()=>{
// lee()
// },[])
  return (      
   <div >
        
         <Routes>
                <Route  path="/" element={<Landing/>} > </Route>
                <Route  path="/mesas" element={<AtencionMesas/>} > </Route>
                <Route  path="/mesasPortada" element={<AtencionMesasPortada/>} > </Route>
                <Route exact path="/home" element={<Home/>} > </Route>
                <Route exact path="/cocina" element={<Cocina/>} > </Route>
                <Route exact path="/caja" element={<Caja/>} > </Route>
                <Route exact path="/login" element={<Login/>} > </Route>
                <Route exact path="/register" element={<Register/>} > </Route>
                <Route exact path="/quit" element={<Quit/>} > </Route>
                <Route exact path="/zoom" element={<Zoom/>} > </Route>
          </Routes>

     </div>    
     );
} 
export default App;