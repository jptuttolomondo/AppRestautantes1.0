
import {Route,Routes} from 'react-router-dom'
import {Landing} from'../landing/landing.jsx'
import { Home } from "../home/home.jsx";
//import {AtencionMesasPortada} from '../mesas/atencionMesasPortada.jsx'
import { AtencionMesas } from '../mesas/atencionMesas.jsx';
import {Cocina} from '../cocina/cocina.jsx';
import {CajaDiaria} from  '../cajas/CajaDiaria.jsx';
import { Login } from '../usuarios/login.jsx';
//import {Quit} from  '../home/quit.jsx';
import {Register}from '../usuarios/register.jsx'
import {EntradasDiaria}from '../cajas/EntradasDiaria/Entradas.Diaria.jsx'
import {SalidasDiaria}from '../cajas/SalidasDiaria/Salidas.Diaria.jsx'
import {TotalesDiaria}from '../cajas/TotalesDiaria/Totales.Diaria.jsx'
import {ComandaDetail}from'../cocina/comanda.detail.jsx'
//import {Atendidas}from'../mesas/Mesas.atendidas.jsx'

import '../styles/App.css'

function App() {
  return (      


         <Routes>
                <Route  path="/" element={<Landing/>} > </Route>
                <Route  path="*" element={<Landing/>} > </Route>
                <Route  exact path="/mesas" element={<AtencionMesas/>} > </Route>
        
                <Route exact path="/home" element={<Home/>} > </Route>
                <Route exact path="/cocina" element={<Cocina/>} > </Route>
                <Route exact path="/cajaDiaria" element={<CajaDiaria/>} > </Route>
                <Route exact path="/login" element={<Login/>} > </Route>
                <Route exact path="/register" element={<Register/>} > </Route>
       
              
                <Route exact path="/EntradasDiaria" element={<EntradasDiaria/>} > </Route>
                <Route exact path="/SalidasDiaria" element={<SalidasDiaria/>} > </Route>
                <Route exact path="/TotalesDiaria" element={<TotalesDiaria/>} > </Route>
                <Route exact path="/cocina/comanda/:id" element={<ComandaDetail/>} > </Route>
              
          
          </Routes>
   
     );
} 
export default App;
//         <Route exact path="/quit" element={<Quit/>} > </Route>
//  <Route exact path="/mesas/atendidas" element={<Atendidas/>} > </Route>