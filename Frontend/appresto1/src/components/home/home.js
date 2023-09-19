
import {Link}from 'react-router-dom';    
import { useSelector } from 'react-redux';
import {Login}from '../usuarios/login.js'
import headerStylesHome from '../styles/classes/header.module.css';
import containerStylesHome from '../styles/classes/containers.module.css';
import StylesHome from '../styles/home.module.css';
import ButtonsHome from'../styles/classes/buttons.module.css';
import logoStyle from '../styles/classes/logo.module.css';
import '../styles/home.module.css';
export function Home() {
const resultLogin=useSelector((state)=>state.loginReducer.resultLogin)


  return (
 resultLogin!==200? <Login/>:
       <div>

<header 
className= {`${headerStylesHome.header} ${headerStylesHome.fondoHeader} 
${headerStylesHome.tituloHeader} ${ headerStylesHome.letraHeader}`}
>Aplicación para <br/> Restaurantes/Cafe</header>    
<div
        className={`${containerStylesHome.fondoContainer} ${StylesHome.homeContainer}`}
      >

     
   
<Link to ="/mesas"><div className={`${StylesHome.containerButtons} ${ButtonsHome.buttonsHome}`}>Atención de Mesas</div></Link>
<Link to ="/mesas/atendidas"><div className={`${StylesHome.containerButtons} ${ButtonsHome.buttonsHome}`}>Mesas Servidas</div></Link>  
<Link to ="/cocina"><div className={`${StylesHome.containerButtons} ${ButtonsHome.buttonsHome}`}>Cocina</div></Link>
<Link to ="/cajaDiaria"><div className={`${StylesHome.containerButtons} ${ButtonsHome.buttonsHome}`}>Caja Diaria</div></Link>
<Link to ="/quit"><div className={`${StylesHome.containerButtons} ${ButtonsHome.buttonsHome}`}>Salir</div></Link>
<div className={logoStyle.logo}><img src="https://res.cloudinary.com/dzb1aoikl/image/upload/v1666825686/appresto/mesa_de_cafe_grande_prlqnf.svg" alt=''/></div>

 </div>
 </div>

  );
}
