import {React}from 'react';

import {Link} from 'react-router-dom'
import stylesLanding from'../styles/landing.modules.css'

export function Landing() {
  return (
<div>

    
  <header className={`${stylesLanding.header_landing} 
  ${stylesLanding.fondoHeader_landing} 
  ${stylesLanding.tituloheader_landing} 
  ${stylesLanding.letraTitulo_landing}`}>Aplicación para <br/> Restaurantes/Cafe</header>
  <div className="grid-container-landing fondoContainer-landing">

<div className="grid-item-landing landingPage-empresa-landing">El Cafecito</div>

<Link to="/login" className="landingPage-ingreso-link-landing">Ingresar</Link>
<div className="grid-item landingPage-logo-landing"><img src="https://res.cloudinary.com/dzb1aoikl/image/upload/v1666825686/appresto/mesa_de_cafe_grande_prlqnf.svg" alt=''/></div>

</div>
  </div>


  );
}

{/*
<div className="landingPage-body">

<div className="landingPage-content">
      <div className="landingPage-header">
      <div className="landingPage-titulo">Aplicación para<br></br> Restaurantes/Café</div>
      </div>
<Link to ="/login"><div className="landingPage-ingreso">Ingresar</div></Link>
<div className="landingPage-empresa">El cafecito</div>
<div className="landingPage-logo"><img src="https://res.cloudinary.com/dzb1aoikl/image/upload/v1666825686/appresto/mesa_de_cafe_grande_prlqnf.svg" alt=''/></div>
</div>
</div>
  */}
