import './home.css';
import {Link}from 'react-router-dom';    
import { useSelector } from 'react-redux';
import {Login}from '../usuarios/login.js'

export function Home() {
const resultLogin=useSelector((state)=>state.loginReducer.resultLogin)


  return (
 resultLogin!==200? <Login/>:
       <div align="center">
<div className="home-body">
      <div className="landing-header">
      <div className="landing-titulo">Aplicación para<br></br> Restaurantes/Café</div>
      </div>
   
<Link to ="/mesas"><div className="landing-atencionMesas">Atención de Mesas</div></Link>
<Link to ="/cocina"><div className="landing-cocina">Cocina</div></Link>
<Link to ="/cajaDiaria"><div className="landing-caja">Caja Diaria</div></Link>
<div className="landing-logo"><img src="https://res.cloudinary.com/dzb1aoikl/image/upload/v1666825686/appresto/mesa_de_cafe_grande_prlqnf.svg" alt=''/></div>
<Link to ="/quit"><div className="landing-salir">Salir</div></Link>
 </div>
 </div>
  );
}
