import { React } from "react";
import { Link } from "react-router-dom";

import LandingEstilos from "../styles/landing.module.css";
import headerStylesLanding from '../styles/classes/header.module.css';
import containerStylesLanding from '../styles/classes/containers.module.css';
import logoStyle from '../styles/classes/logo.module.css';
 

export function Landing() {


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
          El Cafecito
        </div>
        <Link
          to="/login"
          className={LandingEstilos.ingresolink}
        >
          Ingresar
        </Link>
        <div className={logoStyle.logo}>
          <img
            src="https://res.cloudinary.com/dzb1aoikl/image/upload/v1666825686/appresto/mesa_de_cafe_grande_prlqnf.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
