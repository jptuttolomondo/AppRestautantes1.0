import React, { useState, useEffect ,useCallback,useMemo} from 'react';
import { useDispatch } from 'react-redux';
import {getComandasForCocina,PasarComanda
}from '../../actions/cocina.actions.jsx'
import{useGetComandasForCocinaSelector}from '../../selectors/cocina.selectors.jsx';
import {Link}from 'react-router-dom';    
import {convertirTiempo} from '../../utils/utils.functions.jsx'

import headerStyleCocina from '../styles/classes/header.module.css'
import cocinaStyle from '../styles/cocina.module.css'; 
import '../styles/cocina.css'
export function Cocina() {
const dispatch=useDispatch()
const listaComandas=useGetComandasForCocinaSelector()
const [currentDateTime, setCurrentDateTime] = useState(new Date());
const getComandasForCocina1 = useCallback(() => {
    dispatch(getComandasForCocina());
  }, [dispatch]);

useEffect(() => {
  getComandasForCocina1()
  }, [listaComandas,getComandasForCocina1]);

useEffect(() => {
     const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Actualizar cada segundo
    return () => {
      clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta
    };
  }, []);

const formattedDateTime = useMemo(() => {
  return currentDateTime.toLocaleString();
}, [currentDateTime]);


  return (   
     <div >

      <header
        className={`${headerStyleCocina.header} ${headerStyleCocina.fondoHeader} 
${headerStyleCocina.tituloHeader} ${headerStyleCocina.letraHeader}`}
      >
        Aplicación para <br /> Restaurantes/Cafe<br />Cocina
      </header>

<div className={cocinaStyle.cocinabody}>


<div className={cocinaStyle.cocinahora}>{formattedDateTime} </div>
 <div className={cocinaStyle.MesastablaItemsCocina}>
 <table className={cocinaStyle.cocinaencabezadoItems} id="tablaItemsCocina">
            <thead className={cocinaStyle.encabezadotablaCocina}>
              <tr >
                <th >Mesa</th>
                <th >Mozo</th>
                <th >Tiempo transcurrido desde la toma del pedido</th>
                <th >Estado</th>
              </tr>
            </thead>
            <tbody>    
{listaComandas?.map((e,index)=>{
    const filaClase = index % 2 === 0 ? 'fila-par' : 'fila-impar';

    function handleclick(payload){
    dispatch(PasarComanda(payload))
    }
    const handleClickButton = () => {
      handleclick(e);
    };
  return( 
   
<tr key={index}className={`fila-link ${filaClase}`}>

    <td>  <Link  to={`/cocina/comanda/${e._id}`}key={index}onClick={handleClickButton}className={cocinaStyle.wholecelllink}> 
      {e.mesa} </Link> </td>
    <td><Link  to={`/cocina/comanda/${e._id}`}key={index}onClick={handleClickButton}className={cocinaStyle.wholecelllink}> {e.mozo.firstName}  </Link> </td>
  <td><Link  to={`/cocina/comanda/${e._id}`}key={index}onClick={handleClickButton}className={cocinaStyle.wholecelllink}> {convertirTiempo(e.date)} </Link> </td>
    <td> <Link  to={`/cocina/comanda/${e._id}`}key={index}onClick={handleClickButton}className={cocinaStyle.wholecelllink}>{e.estado}  </Link></td> 
  </tr>
  )
})}
            </tbody>
                 </table>
 </div>
 <Link to="/home">
          <div className={cocinaStyle.cocinavolver}>Volver</div>
        </Link> 
        </div>
 </div>

  );
}

