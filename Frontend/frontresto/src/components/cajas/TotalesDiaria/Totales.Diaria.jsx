import {Link}from 'react-router-dom';    


import containerStylesCaja from '../../styles/classes/containers.module.css';

import ButtonsCaja from'../../styles/classes/buttons.module.css';

import '../../styles/home.module.css';
import cajas from '../../styles/CajaDiaria.module.css';
import headerCaja from'../../styles/classes/header.module.css';


export function TotalesDiaria() {


  return (

       <div>
<header
        className={`${headerCaja.header} ${headerCaja.fondoHeader} 
${headerCaja.tituloHeader} ${headerCaja.letraHeader}`}
      >
        Aplicación para <br /> Restaurantes/Cafe
      </header>
    <div className={`${containerStylesCaja.fondoContainer} ${cajas.cajasContainer}`}>
      
   


<Link to ="/cajaDiaria"><div className="landing-caja">Caja Diaria</div></Link>


 </div>
 </div>
  );
}
