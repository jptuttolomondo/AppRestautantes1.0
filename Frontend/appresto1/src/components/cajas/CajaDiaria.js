import { useState } from 'react';
import cajas from '../styles/CajaDiaria.module.css';
import {Link} from 'react-router-dom'
export function CajaDiaria() {

const [input,setInput]=useState({
  fechaCaja:''
})
function handleChange(e){}

  return (
    <div align="center">
<div className="Mesas-body">
      <div className="Mesas-header">
      <div className="Mesas-titulo">Aplicación para <br></br> Restaurantes/Café</div>
      </div>
  <Link to="/home"><div className="Mesas-atras">Atras</div></Link>    
<div className={cajas.caja_subtitulo}>Caja Diaria</div>

<div className={cajas.FechaLetraDiaria}>Fecha:</div>

<input className={cajas.inputFechaCaja}
 type='date'
placeholder='fecha de caja'
value={input.fechaCaja}
name="inputDateCaja"
onChange={handleChange}
/>
<label className={cajas.CajaInicial}>Caja Inicial :</label>
<div>
<Link to="/EntradasDiaria"><div className={cajas.EntradasDiaria}>Entrada Diaria</div></Link>   
</div>
<div>
<Link to="/SalidasDiaria"><div className={cajas.SalidasDiaria}>Salidas diaria</div></Link>   
</div>
<div>
<Link to="/TotalesDiaria"><div className={cajas.TotalesDiaria}>Totales diaria</div></Link>   
</div>
<div>
<Link to="/"><div className={cajas.DescargarInforme}>Desacargar Informe</div></Link>   
</div>
 </div>
 </div>
  );
}
