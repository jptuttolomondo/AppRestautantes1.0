import React from "react";


export function NuevaComanda(){
let fecha=new Date();

return(
    <div>
    <h1>Nueva Comanda</h1>
   {/*hay que traer mesas, como array fijo, figura fecha, hora, traer mozo, seleccionar productos 
   dentro de items y calcular subtortales y totalescuando ingrenen antes de confoirmar*/}


   <div className="Mesas-fecha">Fecha:{fecha.toLocaleDateString()}</div>
<div className="Mesas-hora">Hora:{fecha.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}</div>
<div><label>Mozo:</label></div>
<div> <label>Mesa:</label>
  <select>
<option value='#'>Mesa</option>

   </select></div>
   <div>Items</div>
  <div>
  <label>cantidad </label></div>
  <div><label>Seleccionar Producto </label>
 
   <select>
<option value='#'>Productos</option>

   </select></div>
 <label>Subtotal </label>

 <div key=''> 
                       <p>Mesa:</p>  
                        <p>Mozo:</p>
                        <table border="1" cellspacing="0" cellpadding="10" >
                        <tr >
                                            <td>Cantidad</td>
                                            <td>Descripcion</td>
                                            <td>Precio Unitario</td>
                                            <td>Subtotal</td>
                                            </tr> 
                                            </table>
 </div>



   


<form>
<div>
    <label></label>
</div>






</form>






    </div>



)
}
