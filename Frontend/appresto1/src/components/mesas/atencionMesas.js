import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import "../styles/atencionMesas.css" 
import { Link } from "react-router-dom";
import {  getAllMesas,  getAllProducts,  incrementar, postComanda,  decrementar,  actualizarProducto,
  calcularSubtotal,  actualizarComandaMesa,  calcularTotal,  confirmarItem,  actualizarItemsTotal,
  limpiarEstados,  itemSelection,  clearAllStates} from "../../actions/mesas.actions.js";
import {getComandasForCocina} from'../../actions/cocina.actions.js';
import {  useUserSelector, useMesasSelector,  useMesaComandaSelector,  useCantidadSelector,
  useItemsTotalArraySelector,  useSubtotalItemSelector,  useProductosSelector,  useItemSelectSelector,
  useTotalSelector} from "../../selectors/mesas.selectors.js";


export function AtencionMesas() {
  let fecha = new Date();

  const dispatch = useDispatch();
  const user = useUserSelector()
  const mesas = useMesasSelector()
  const MesaComanda =useMesaComandaSelector()
  const cantidad = useCantidadSelector()
  const itemsTotalArray = useItemsTotalArraySelector()
  const total =useTotalSelector()
  const subtotalItem =  useSubtotalItemSelector()
  const productos = useProductosSelector()
  const itemSelect = useItemSelectSelector()

  const [productItem, setProductItem] = useState("");

  useEffect(() => {
    dispatch(getAllMesas());
    dispatch(getAllProducts());
  }, [dispatch]);

  let NuevoItem = {
    cantidad: cantidad ? cantidad : 0,
    producto: productItem? productItem[0]._id : "",
    //cra en base de datos un proiducto que sea Producto y que se busque inicialmente ese
    subtotalItem: subtotalItem ? subtotalItem : 0,
  };

  let ArrayItemsFinal = [];
  if (itemsTotalArray?.length > 0) {
    ArrayItemsFinal = [...itemsTotalArray];
    ArrayItemsFinal?.push(NuevoItem);
  } else
    cantidad?.length > 0 || productItem !== ""
      ? ArrayItemsFinal?.push(NuevoItem)
      : (ArrayItemsFinal = []);
  let comandaFinal = {
    date: fecha,
    mesa: MesaComanda ? MesaComanda : "",
    estado: "TOMADO",
    mozo: user?._id,
    total: total ? total : 0,
    items: itemsTotalArray ? itemsTotalArray : [],
  };

  
  function handleCantidadMas(e) {
    if (comandaFinal.mesa.length === 0) {
      alert("seleccionar mesa");
      return;
    }
   dispatch(incrementar(NuevoItem.cantidad));
    dispatch(calcularSubtotal());

  }

  function handleCantidadMenos(e) {
    if (comandaFinal.mesa.length === 0) {
      alert("seleccionar mesa");
      return;
    }
    if (NuevoItem.cantidad > 0) {
      dispatch(decrementar(NuevoItem.cantidad));
      dispatch(calcularSubtotal());
 
    }
  }

  function handleProduct(e) {

    if (comandaFinal.mesa.length === 0) {
      alert("seleccionar mesa");
      return;
    }
    if (e.target.value === "seleccionar") return;
    let productoItem = productos?.filter(
      (el) => el.productName === e.target.value
    );
    setProductItem(productoItem);
    dispatch(actualizarProducto(productoItem));
  }

  function handleMesas(e) {
   
    if(itemsTotalArray.length>0) alert(' No puede cambiar de mesa, Cree una nueva comanda')
    else dispatch(actualizarComandaMesa(e.target.value));
  }

function Confirmar(e) {
  e.preventDefault();
  console.log('lista',comandaFinal)
   dispatch(postComanda(comandaFinal))
   dispatch(getComandasForCocina())
   
}


  function handleNuevaComanda(e) {
    e.preventDefault();
  dispatch(clearAllStates())
  dispatch(getAllMesas());
  dispatch(getAllProducts());

  }

  function handleConfirmItem(e) {
  
    e.preventDefault();

    if (comandaFinal.mesa.length === 0) alert("seleccionar mesa");
    else if (NuevoItem.producto === "") alert("Ingresar Producto");
    else if (NuevoItem.cantidad.length === 0) alert("Ingresar Cantidad");
    if (NuevoItem.cantidad > 0 && NuevoItem.producto !== null) {
      dispatch(confirmarItem(NuevoItem));

      let ArraydeItems = [...itemsTotalArray, NuevoItem];
      dispatch(calcularTotal(ArraydeItems));
      dispatch(limpiarEstados(itemsTotalArray));
     // dispatch(clearProductsSelector())
    }
  }

  function handleBorrarItem(e) {
    e.preventDefault();

    if (itemSelect.length > 0) {
      let productoFiltrado = productos?.filter(
        (elem) => elem.productName === itemSelect[1]
      );

      let itemABorrar = itemsTotalArray.find(
        (elem) =>
          elem.cantidad === Number(itemSelect[0]) &&
          elem.producto === productoFiltrado[0]._id
      );
      ArrayItemsFinal = [...itemsTotalArray.filter((e) => e !== itemABorrar)];
      dispatch(actualizarItemsTotal(ArrayItemsFinal));
      dispatch(calcularTotal(ArrayItemsFinal));
      limpiarSeleccion();
    } else alert("debe seleccionar el item");
  }

  function limpiarSeleccion() {
    let campo = document.getElementsByTagName("td");
    for (let i = 0; i < campo.length; i++) campo[i].style.backgroundColor = "";
    dispatch(itemSelection([]));
  }

  function seleccionar() {
    if (itemSelect.length === 0) {
      const datosFila1 = [];
      const campos = document.getElementsByTagName("td");
      for (var i = 0; i < campos.length; i++) {
        campos[i].addEventListener("click", function () {
          let fila = this.parentNode;
          if (datosFila1.length < 3) {
            for (var j = 0; j < fila.childNodes.length; j++) {
              if (
                fila.childNodes[0].textContent !== "" &&
                fila.childNodes[0].textContent !== "0"
              ) {
                datosFila1.push(fila.childNodes[j].textContent);
                fila.childNodes[j].style.background = "red";
                           
              }
            }
            dispatch(itemSelection(datosFila1));
          }
        });
      }
    } else {
      const datosFila1 = [];
      const campos = document.getElementsByTagName("td");
      for (var k = 0; k < campos.length; k++) {
        campos[k].addEventListener("click", function () {
          let fila = this.parentNode;
          if (datosFila1.length < 3) {
            for (var j = 0; j < fila.childNodes.length; j++) {
              if (
                fila.childNodes[0].textContent !== "" &&
                fila.childNodes[0].textContent !== "0"
              )
                fila.childNodes[j].style.background = "";
            }
          }
          dispatch(itemSelection([]));
        });
      }
    }
  }

  return (
    <div align="center">
      <div className="Mesas-body">
        <div className="Mesas-header">
          <div className="Mesas-titulo">
            Aplicación para <br></br> Restaurantes/Café
          </div>
        </div>
        <Link to="/home">
          <div className="volver">Volver</div>
        </Link>
    
   
          <div className="Mesas-fecha">Fecha:{fecha.toLocaleDateString()}</div>
          <div className="Mesas-hora">
            Hora:
            {fecha.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
          <div className="Mesas-mesa">
            Mesa:
            <select className="box-mesa" onChange={(e) => handleMesas(e)} >
              <option value="seleccionar">sel</option>
              {mesas?.map((el) => (
                <option value={el.mesa} key={el._id}>
                  {el.mesa}{" "}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button
              className="Mesas-boton-cantidad-mas"
              onClick={(e) => handleCantidadMas(e)}
            >
          ↑↑
            </button>{" "}
          </div>
          <div>
            <button
              className="Mesas-boton-cantidad-menos"
              onClick={(e) => handleCantidadMenos(e)}
            >
              ↓↓
            </button>
          </div>    

          <div className="Mesas-producto">
       
            <select className="box-producto"onChange={(e) => handleProduct(e)}>
              <option value="seleccionar">Productos</option>
              {productos?.map((el) => (
                <option value={el.productName} key={el._id}>
                  {el.productName}{" "}
                </option>
              ))}
            </select>
          </div>
          <div className="Mesas-tablaItems">
       
          <table className="encabezadoItems" id="tablaItems">
            <thead>
              <tr>
                <th className="cantidadEncabezado">Cantidad</th>
                <th className="productoEncabezadoMesas">Producto</th>
                <th className="subtotalEncabezado">Subtotal</th>
              </tr>
            </thead>
            <tbody>
           
              {ArrayItemsFinal.length > 0 ? (
                ArrayItemsFinal?.map((e, index) => {
                  return (
                    <tr className="items" key={index}>
                      <td className="filaItem1">{e.cantidad}</td>
                      <td className="filaItem2">
                        {productos.map((elem) => {
                          if (elem._id === e.producto) return elem.productName;
                          return null;
                        })}
                        
                      </td>
                
                      <td className="filaItem3">{e.subtotalItem} </td>
                    </tr>
                  );
                }
                
                   
               
                )
                

              ) : (
                <tr className="items">
                  <td className="filaItem2"> productos</td>
                </tr>
              )}
            </tbody>
          </table>
       
          </div>
          {seleccionar()}
          <div className="Mesas-total">Total:{total}</div>
       
            <button className="confirmarItem-button"onClick={(e) => handleConfirmItem(e)}>
              Confirmar Item
            </button>
              <button className="BorrarItem-button" onClick={(e) => handleBorrarItem(e)}>Borrar Item</button>
              <button className="confirmarComanda-button"onClick={(e) => Confirmar(e)}>
              Confirmar Comanda
            </button>
           <div className="Mozo">Mozo:{user?.firstName} </div>
           <button className="nuevaComanda-button"type="submit" onClick={(e) => handleNuevaComanda(e)}>Nueva Comanda</button>
    
      </div>
    </div>
  );
}
