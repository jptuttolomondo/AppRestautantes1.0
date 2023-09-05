import React, { useState, useEffect ,useCallback,useMemo} from 'react';
import { useDispatch } from 'react-redux';
import {getComandasForCocina,PasarComanda
}from '../../actions/cocina.actions.js'
import{useGetComandasForCocinaSelector}from '../../selectors/cocina.selectors.js';
import {Link}from 'react-router-dom';    
import {convertirTiempo} from '../../utils/utils.functions.js'
import '../styles/cocina.css';
//import { ComandaDetail } from './comanda.detail.js';

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
//const formattedDateTime = currentDateTime.toLocaleString();

const formattedDateTime = useMemo(() => {
  return currentDateTime.toLocaleString();
}, [currentDateTime]);


  return (
    <div align="center">
<div className="cocina-body">
<div className="cocina-encabezado">Aplicación para restaurantes<br></br>Cocina</div>
<div className="cocina-hora">{formattedDateTime} </div>
 <div className='Mesas-tablaItems-Cocina'>
 <table className="cocina-encabezadoItems" id="tablaItems">
            <thead className='encabezado-tabla'>
              <tr>
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

    <td>  <Link  to={`/cocina/comanda/${e._id}`}key={index}onClick={handleClickButton}className="link-item"> 
      {e.mesa} </Link> </td>
    <td>{e.mozo.firstName}  </td>
  <td> {convertirTiempo(e.date)}  </td>
    <td> {e.estado}  </td> 
  </tr>
  )
})}
            </tbody>
                 </table>
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