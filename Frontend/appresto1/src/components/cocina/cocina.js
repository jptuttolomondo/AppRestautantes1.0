
import React, { useState, useEffect ,useCallback} from 'react';

import { useDispatch } from 'react-redux';
import '../styles/cocina.css';
import {getComandasForCocina,


}from '../../actions/cocina.actions.js'
import{getUser} from '../../actions/login.actions.js'
import{useUserSelector,useGetComandasForCocinaSelector}from '../../selectors/cocina.selectors.js';
import {useComandaCreadaSelector}from '../../selectors/mesas.selectors.js';
import {Link}from 'react-router-dom';    

export function Cocina() {
const dispatch=useDispatch()
const user = useUserSelector()
const listaComandas=useGetComandasForCocinaSelector()
const comandaCreada=useComandaCreadaSelector()


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



  const formattedDateTime = currentDateTime.toLocaleString();

  return (
    <div align="center">
<div className="cocina-body">
<div className="cocina-encabezado">Aplicación para restaurantes<br></br>Cocina</div>
<div className="cocina-hora">{formattedDateTime} </div>
 <div className='Mesas-tablaItems-Cocina'>
{listaComandas?.map(e=>{
  return <div>{e.mesa}
  </div>
})}


 </div>

 <Link to="/home">
          <div className="cocina-volver">Volver</div>
        </Link> 
        </div>
 </div>

  );
}
//traer las comandas en estado tomado y modificado y mostra como listado, sin fotos
//al terminar de preparar, boton finalizada y cambiar el estado a terminada