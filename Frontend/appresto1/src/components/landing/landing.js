import {Link} from 'react-router-dom'
import './landing.css';
//import styles from'../styles/index.module.css';
//import styles_temas from '../styles/temas.module.css'
//import '../styles/landing.scss'
export function Landing() {
  return (
<div align="center">
<div className="landingPage-body"></div>
      <div className="landingPage-header">
      <div className="landingPage-titulo">Aplicación para<br></br> Restaurantes/Café</div>
      </div>
<Link to ="/login"><div className="landingPage-ingreso">Ingresar</div></Link>
<div className="landingPage-empresa">El cafecito</div>
<div className="landingPage-logo"><img src="https://res.cloudinary.com/dzb1aoikl/image/upload/v1666825686/appresto/mesa_de_cafe_grande_prlqnf.svg" alt=''/></div>

 </div>
  );
}


