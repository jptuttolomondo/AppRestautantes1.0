import {Link}from 'react-router-dom';    
import containerStylesCaja from '../styles/classes/containers.module.css';

import ButtonsCaja from'../styles/classes/buttons.module.css';

import '../styles/home.module.css';
import cajas from '../../styles/CajaDiaria.module.css';
import headerCaja from'../../styles/classes/header.module.css';




export function EntradasDiaria() {

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
   
<Link to ="/mesas"><div className="landing-atencionMesas">Atención de Mesas</div></Link>
<Link to ="/cocina"><div className="landing-cocina">Cocina</div></Link>
<Link to ="/cajaDiaria"><div className="landing-caja">Caja Diaria</div></Link>

<Link to ="/quit"><div className="landing-salir">Salir</div></Link>
 </div>
 </div>
  );
}
