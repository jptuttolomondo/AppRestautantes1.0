
import React, { useState, useEffect ,useCallback,useMemo} from 'react';
import { useDispatch } from 'react-redux';
import {getComandasForCocina,PasarComanda
}from '../../actions/cocina.actions.js'
import{useGetComandasAtendidasSelector}from '../../selectors/mesas.selectors.js';
import {Link}from 'react-router-dom';    
import {convertirTiempo} from '../../utils/utils.functions.js'
import '../styles/cocina.css';
export function Atendidas() {
 const dispatch=useDispatch()
const listaComandasAtendidas=[]//useGetComandasAtendidasSelector()
const [currentDateTime, setCurrentDateTime] = useState(new Date());
const getComandasForCocina1 = useCallback(() => {
    dispatch(getComandasForCocina());
  }, [dispatch]);

useEffect(() => {
  getComandasForCocina1()
  }, [listaComandasAtendidas,getComandasForCocina1]);

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
    <div align="center">
<div className="cocina-body">
<div className="cocina-encabezado">Aplicación para restaurantes<br></br>Cocina</div>
<div className="cocina-hora">{formattedDateTime} </div>
 <div className='Mesas-tablaItems-Cocina'>
 <table className="cocina-encabezadoItems" id="tablaItemsCocina">
            <thead className='encabezado-tabla-Cocina'>
              <tr>
                <th >Mesa</th>
                <th >Mozo</th>
                <th >Tiempo transcurrido desde la toma del pedido</th>
                <th >Estado</th>
              </tr>
            </thead>
            <tbody>    
{/*listaComandasAtendidas?.map((e,index)=>{
    const filaClase = index % 2 === 0 ? 'fila-par' : 'fila-impar';

    function handleclick(payload){
    dispatch(PasarComanda(payload))
    }
    const handleClickButton = () => {
      handleclick(e);
    };
  return( 
   
<tr key={index}className={`fila-link ${filaClase}`}>

    <td>  <Link  to={`/cocina/comanda/${e._id}`}key={index}onClick={handleClickButton}className="whole-cell-link"> 
      {e.mesa} </Link> </td>
    <td><Link  to={`/cocina/comanda/${e._id}`}key={index}onClick={handleClickButton}className="whole-cell-link"> {e.mozo.firstName}  </Link> </td>
  <td><Link  to={`/cocina/comanda/${e._id}`}key={index}onClick={handleClickButton}className="whole-cell-link"> {convertirTiempo(e.date)} </Link> </td>
    <td> <Link  to={`/cocina/comanda/${e._id}`}key={index}onClick={handleClickButton}className="whole-cell-link">{e.estado}  </Link></td> 
  </tr>
  )
})*/}
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

// export function Cocina() {
//
// 


 



