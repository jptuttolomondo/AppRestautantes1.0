
import {Route,Routes} from 'react-router-dom'
import {Landing} from'../landing/landing.js'
import { Home } from "../home/home.js";
import {AtencionMesasPortada} from '../mesas/atencionMesasPortada.js'
import { AtencionMesas } from '../mesas/atencionMesas.js';
import {Cocina} from '../cocina/cocina.js';
import {CajaDiaria} from  '../cajas/CajaDiaria.js';
import { Login } from '../usuarios/login.js';
import {Quit} from  '../home/quit.js';
import { Zoom } from '../../utils/zoom.js';
import {Register}from '../usuarios/register.js'
import './App.css';
function App() {
  return (      
   <div >
        
         <Routes>
                <Route  path="/" element={<Landing/>} > </Route>
                <Route  path="/mesas" element={<AtencionMesas/>} > </Route>
                <Route  path="/mesasPortada" element={<AtencionMesasPortada/>} > </Route>
                <Route exact path="/home" element={<Home/>} > </Route>
                <Route exact path="/cocina" element={<Cocina/>} > </Route>
                <Route exact path="/cajaDiaria" element={<CajaDiaria/>} > </Route>
                <Route exact path="/login" element={<Login/>} > </Route>
                <Route exact path="/register" element={<Register/>} > </Route>
                <Route exact path="/quit" element={<Quit/>} > </Route>
                <Route exact path="/zoom" element={<Zoom/>} > </Route>
          </Routes>

     </div>    
     );
} 
export default App;