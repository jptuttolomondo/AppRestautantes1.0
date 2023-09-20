import { Link } from "react-router-dom";

import LandingEstilos from "../styles/landing.module.css";
import headerStylesLanding from '../styles/classes/header.module.css';
import containerStylesLanding from '../styles/classes/containers.module.css';
import logoStyle from '../styles/classes/logo.module.css';
 

export function Landing() {
  const empresa = import.meta.env.VITE_EMPRESA;
  const logo=import.meta.env.VITE_LOGO;

  return (
    <div>
      <header
        className={`${headerStylesLanding.header} ${headerStylesLanding.fondoHeader} 
${headerStylesLanding.tituloHeader} ${headerStylesLanding.letraHeader}`}
      >
        Aplicación para <br /> Restaurantes/Cafe
      </header>
      <div
        className={`${containerStylesLanding.gridcontainer} ${containerStylesLanding.fondoContainer}`}
      >
        <div
          className={`${LandingEstilos.itemContainer} ${LandingEstilos.empresa}`}
        >
          {empresa}
        </div>
        <Link
          to="/login"
          className={LandingEstilos.ingresolink}
        >
          Ingresar
        </Link>
        <div className={logoStyle.logo}>
          <img
            src={logo}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
