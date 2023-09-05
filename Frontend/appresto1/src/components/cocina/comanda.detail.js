import React, { useState, useEffect ,useCallback} from 'react';
import { useDispatch } from 'react-redux';
//import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {useGetComandaByIdSelector} from  '../../selectors/cocina.selectors.js'
import{ChangeStateAndUpdateComanda}from'../../actions/cocina.actions.js'

export function ComandaDetail(){
    const dispatch=useDispatch()
    const comandaGetted=useGetComandaByIdSelector()
console.log(comandaGetted)
let comandaCambiada={}
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
    <div align="center">
        <Link to='/cocina' ><button title="Cerrar" onClick= {handleCerrar}> X</button></Link> 
<div>
   <p> mesa: {comandaGetted.mesa}</p>
   <p> mozo:{comandaGetted.mozo.firstName}</p>
   <p>estado:{comandaGetted.estado}</p> 
    items: {comandaGetted.items.map((el,index)=>{
        return(
<div key={index}>
<p> cantidad:{el.item.cantidad}</p>
<p> producto:{el.item.producto.productName}</p>
</div>
        )
    })}


<button type="button" onClick={(e)=>handleClick('LISTO PARA SERVIR')} >Pasar comanda a LISTO PARA SERVIR </button>
<button type="button" onClick={(e)=>handleClick('PREPARANDO')} >Pasar comanda a PREPARANDO </button>

</div>
</div>
)

}