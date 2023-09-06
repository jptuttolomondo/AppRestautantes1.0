
import React, { useState, useEffect ,useCallback,useMemo} from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import {useGetComandaByIdSelector} from  '../../selectors/cocina.selectors.js'
import{ChangeStateAndUpdateComanda}from'../../actions/cocina.actions.js'
import {convertirTiempo} from '../../utils/utils.functions.js'
import '../styles/comanda.Detail.css'

export function ComandaDetail(){
    const dispatch=useDispatch()
    const comandaGetted=useGetComandaByIdSelector()
console.log(comandaGetted)
let comandaCambiada={}
const [currentDateTime, setCurrentDateTime] = useState(new Date());
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



function handleClick(payload){
    comandaCambiada={...comandaGetted,estado:payload}
const respuesta = confirm("¿Estás seguro?"); // eslint-disable-line
if (respuesta) {
      dispatch(ChangeStateAndUpdateComanda(comandaCambiada))
} 


}

const handleCerrar=() => {
   
}

return(
    <div align="center" >
     
<div className='detail_container'>

       <Link to='/cocina' ><button title="Cerrar" onClick= {handleCerrar} className='ButtonCerrar'> X</button></Link> 
       <p className='datetime'>{formattedDateTime}</p>
   <p className='mesa1'> Mesa: {comandaGetted.mesa}</p>
   <p className='tiempo1'> Tiempo Transcurrido: {convertirTiempo(comandaGetted.date)}</p>
   <p className='mozo1'> Mozo:{comandaGetted.mozo.firstName}</p>
   <p className='estado1'>Estado:{comandaGetted.estado}</p> 
  {comandaGetted.items.map((el,index)=>{
        return(
<div key={index}>
    <ul style={{ listStyleType: 'none', padding: '0' }}>
<li><span style={{marginRight:'2px'}}>{el.item.cantidad}</span><span style={{marginLeft:'10px'}}> {el.item.producto.productName}</span>

</li>

    </ul>
 

</div>
        )
    })}

{comandaGetted.estado==='TOMADO'? <button type="button" onClick={(e)=>handleClick('PREPARANDO')} className='buttonListo'> PREPARANDO </button>
:comandaGetted.estado==='PREPARANDO'?<button type="button" onClick={(e)=>handleClick('LISTO PARA SERVIR')} className='buttonListo' > LISTO PARA SERVIR </button>
:comandaGetted.estado==='LISTO PARA SERVIR'?<button type="button" onClick={(e)=>handleClick('SERVIDO')} className='buttonListo' > SERVIDO </button>
:       <Link to='/cocina' ><button type="button"  className='buttonListo' >Salir </button></Link>
}
</div>
</div>
)

}