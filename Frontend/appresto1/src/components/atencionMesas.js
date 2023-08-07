import { useEffect, useState } from "react";
//ver actualizarArrayItems , clearMessages,actualizarComanda,  getComandaId
import {
  getAllMesas,
  getAllProducts,
  incrementar,
  postComanda,
  decrementar,
  actualizarComandaCantidad,
  actualizarProducto,
  calcularSubtotal,
  actualizarComandaMesa,
  calcularTotal,
  confirmarItem,
  actualizarItemsTotal,
  limpiarEstados,
  itemSelection,
} from "../actions";
import { useDispatch, useSelector } from "react-redux";
import "./atencionMesas.css";
import { Link } from "react-router-dom";

export function AtencionMesas() {
  let fecha = new Date();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  // const idComanda = useSelector((state) => state.idComanda)
   const comanda = useSelector((state) => state.comanda)
  const mesas = useSelector((state) => state.mesas);
  const MesaComanda = useSelector((state) => state.MesaComanda);
  const cantidad = useSelector((state) => state.cantidadItem);
  const itemsTotalArray = useSelector((state) => state.itemsTotal);
  const total = useSelector((state) => state.total);
  const subtotalItem = useSelector((state) => state.subtotalItem);
  const productos = useSelector((state) => state.products);
  const itemSelect = useSelector((state) => state.itemSelected);
  const [productItem, setProductItem] = useState("");
console.log('comanda',comanda)
  useEffect(() => {
    dispatch(getAllMesas());
    dispatch(getAllProducts());
  }, [dispatch]);

  let NuevoItem = {
    cantidad: cantidad ? cantidad : 0,
    producto: productItem ? productItem[0]._id : "",
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
    estado: "PENDIENTE",
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
    dispatch(calcularTotal(itemsTotalArray));
    dispatch(actualizarComandaCantidad());
  }

  function handleCantidadMenos(e) {
    if (comandaFinal.mesa.length === 0) {
      alert("seleccionar mesa");
      return;
    }
    if (NuevoItem.cantidad > 0) {
      dispatch(decrementar(NuevoItem.cantidad));
      dispatch(calcularSubtotal());
      dispatch(calcularTotal(itemsTotalArray));
      dispatch(actualizarComandaCantidad());
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
    dispatch(actualizarComandaMesa(e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('lista',comandaFinal)
    // dispatch(postComanda(comandaFinal))
    //separa confirmar comanda de handlesubmit
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
                dispatch(itemSelection(datosFila1));
              }
            }
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
          <div className="Mesas-atras">Atras</div>
        </Link>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="Mesas-tablaItems"></div>
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
            <select onChange={(e) => handleMesas(e)} className="Mesas">
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
              +
            </button>{" "}
          </div>
          <div>
            <button
              className="Mesas-boton-cantidad-menos"
              onClick={(e) => handleCantidadMenos(e)}
            >
              -
            </button>
          </div>
          <div className="Mesas-producto">
            Producto:
            <select onChange={(e) => handleProduct(e)}>
              <option value="seleccionar">Productos</option>
              {productos?.map((el) => (
                <option value={el.productName} key={el._id}>
                  {el.productName}{" "}
                </option>
              ))}
            </select>
          </div>
          <table className="encabezadoItems" id="tablaItems">
            <thead>
              <tr>
                <th className="cantidadEncabezado">Cantidad</th>
                <th className="productoEncabezado">Producto</th>
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
                })
              ) : (
                <tr className="items">
                  <td className="filaItem2"> productos</td>
                </tr>
              )}
            </tbody>
          </table>
          {seleccionar()}
          <div className="Mesas-total">Total:{total}</div>
          <div className="Mesas-mas">
            <button onClick={(e) => handleConfirmItem(e)}>
              Confirmar Item
            </button>
          </div>
          <div className="BorrarItem">
            <button onClick={(e) => handleBorrarItem(e)}>Borrar Item</button>
          </div>
          <div className="Mesas-logo">
            <button type="submit" onClick={(e) => handleSubmit(e)}>
              confirmar
            </button>
          </div>
          <div className="Mozo">Mozo:{user?.firstName} </div>
        </form>
      </div>
    </div>
  );
}
