import { useState } from 'react';


import containerStylesCaja from '../styles/classes/containers.module.css';

import ButtonsCaja from'../styles/classes/buttons.module.css';

import '../styles/home.module.css';
import cajas from '../styles/CajaDiaria.module.css';
import headerCaja from'../styles/classes/header.module.css'

import {Link} from 'react-router-dom'
export function CajaDiaria() {

const [input,setInput]=useState({
  fechaCaja:''
})
function handleChange(e){}

  return (
    <div >

<header
        className={`${headerCaja.header} ${headerCaja.fondoHeader} 
${headerCaja.tituloHeader} ${headerCaja.letraHeader}`}
      >
        Aplicación para <br /> Restaurantes/Cafe
      </header>
    <div className={`${containerStylesCaja.fondoContainer} ${cajas.cajasContainer}`}>
      
  <Link to="/home"><div >Atras</div></Link>    
<div >Caja Diaria</div>

<div >Fecha:</div>

<input 
 type='date'
placeholder='fecha de caja'
value={input.fechaCaja}
name="inputDateCaja"
onChange={handleChange}
/>
<label >Caja Inicial :</label>
<div>monto</div>
<div>
<Link to="/EntradasDiaria"><div >Entrada Diaria</div></Link>  
</div>
 <div>monto</div>
<div>
<Link to="/SalidasDiaria"><div >Salidas diaria</div></Link>  
</div>
<div>monto</div>
<div>
<Link to="/TotalesDiaria"><div >Totales diaria</div></Link>   
</div>
<div>monto</div>
<div>
<Link to="/"><div >Descargar Informe</div></Link>   
</div>
 </div>
 </div>
  );
}
