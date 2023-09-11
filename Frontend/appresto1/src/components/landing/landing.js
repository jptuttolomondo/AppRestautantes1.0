import {React}from 'react';

import {Link} from 'react-router-dom'
import '../styles/landing1.modules.css'
import LandingEstilos from '../styles/landing1.modules.css';

export function Landing() {
  return (
<div>
   
  <header className="header-landing fondoHeader-landing tituloheader-landing letraTitulo-landing">Aplicación para <br/> Restaurantes/Cafe</header>
  <div className="grid-container-landing fondoContainer-landing">

<div className="grid-item-landing landingPage-empresa-landing">El Cafecito</div>

<Link to="/login" className="landingPage-ingreso-link-landing">Ingresar</Link>
<div className="grid-item landingPage-logo-landing"><img src="https://res.cloudinary.com/dzb1aoikl/image/upload/v1666825686/appresto/mesa_de_cafe_grande_prlqnf.svg" alt=''/></div>

</div>
  </div>


  );
}

