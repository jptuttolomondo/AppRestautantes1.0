import cajas from './CajaDiaria.module.css';
import {Link} from 'react-router-dom'
export function CajaDiaria() {
  return (
    <div align="center">
<div className="Mesas-body">
      <div className="Mesas-header">
      <div className="Mesas-titulo">Aplicación para <br></br> Restaurantes/Café</div>
      </div>
  <Link to="/home"><div className="Mesas-atras">Atras</div></Link>    
<div className={cajas.caja_subtitulo}>Caja Diaria</div>
<div className="Mesas-tablaItems"></div>
<div className={cajas.MesasFecha}>Fecha:</div>

 </div>
 </div>
  );
}
