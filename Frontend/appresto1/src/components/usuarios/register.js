import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postCreateUser } from '../../actions/register.actions.js'
import "../styles/atencionMesas.css";
import stylesRegister from "../styles/register.module.css";
import {DateSelector} from "../calendar.js"


export function Register() {
  const dispatch = useDispatch();
  const resultCreateUser = useSelector((state) => state.registerReducer.resultCreateUser);
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    dni: "",
    address: "",
    username: "",
    password: "",
    role: "USER",
    inputDate: "",
    payDay: "",
  });
  function formatDate(date) {
    
    const partes = date.split("-"); // Divide la cadena en partes usando el guion como separador
    
    const año = parseInt(partes[0], 10); // Convierte el año a un número entero (base 10)
    const mes = parseInt(partes[1], 10) - 1; // Convierte el mes a un número entero (base 10) y resta 1 (los meses en JavaScript son de 0 a 11)
    const día = parseInt(partes[2], 10); // Convierte el día a un número entero (base 10)
    
    const fecha = new Date(año, mes, día); 
    return fecha
  }
  function validate(input) {
    let errors = {};
    if (!input.firstName) {
      errors.firstName = "Nombre Valido";
    } else {
      if (!/^[A-Z]/.test(input.firstName))
        errors.firstName = "Mayúscula";
      else if (!/^[A-Z][a-z]+$/.test(input.firstName))
        errors.firstName = "Minúsculas";
    }
    if (!input.lastName) {
      errors.lastName = "Apellido Valido";
    } else {
      if (!/^[A-Z]/.test(input.lastName))
        errors.lastName = "Mayúscula";
      else if (!/^[A-Z][a-z]+$/.test(input.lastName))
        errors.lastName = "Minúsculas";
    }

    if (!input.username) errors.username = "Usuario valido";
    else {
      if (!/^[a-z]/.test(input.username))
        errors.username = "Minúsculas";
      else if (!/^([a-z]||[0-9])+$/.test(input.username))
        errors.username = "Minúsculas/números";
    }

    if (!input.password) errors.password = "Contraseña válida";
    else {
      if (!/^.{6,}/.test(input.password))
        errors.password = "6 caracteres";
    }

    if (!input.address) errors.address = "Direccion válida";
    else {
      if (!/^[A-Za-z]+\s\d+$/.test(input.address))
        errors.address = "Calle y numero";
    }

    if (!input.inputDate) {
      errors.inputDate = "Completar fecha";
    } else {
      let fecha = new Date();
      let inputDate=formatDate(input.inputDate)
      if (inputDate >fecha)errors.inputDate = "Fecha Ingreso"
    
    }

    if (!input.dni) {
      errors.dni = "DNI Válido";
    } else {
      if (!/^\d{8}$/.test(input.dni)) errors.dni = "DNI inválido";
    }

    if (!input.payDay) errors.payDay = "Dia de pago";
    else {
      if (!/^(?:[1-9]|1\d|2[0-8])$/.test(input.payDay))
        errors.payDay = "1 a 28";
    }

    return errors;
  }

  function handleChange(e) {
    setErrors(validate({ ...input, [e.target.name]: e.target.value }));
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    if (input.username === "" || input.password === "") {
      e.preventDefault();
      alert("Completar correctamente el formulario");
    } else {
      e.preventDefault();
      dispatch(postCreateUser(input));
      if (resultCreateUser.status)
        alert(resultCreateUser.status + "  :" + resultCreateUser.message);
      setInput({
        firstName: "",
        lastName: "",
        dni: "",
        address: "",
        username: "",
        password: "",
        role: "USER",
        inputDate: "",
        payDay: "",
      });
    }
  }

  return (
    <div>

<header 
className= {`${stylesRegister.header} ${stylesRegister.fondoHeader} 
${stylesRegister.tituloHeader} ${ stylesRegister.letraHeader}`}
>Aplicación para <br/> Restaurantes/Cafe</header>

<div className={stylesRegister.fondo}>
    <div className={stylesRegister.grid1}>
  <Link to="/"><div className={stylesRegister.atras}>Atras</div></Link>
  <div className={stylesRegister.cartel}>Registro de Usuarios</div>

  </div>
  <form onSubmit={(e) => handleSubmit(e)}>
  <div  className={stylesRegister.grid2}>
 
              <label className={stylesRegister.Texto}>Nombre: </label>
              <input
                className={`${stylesRegister.inputData} ${errors.firstName&&"error"}`}
                type="text"
                placeholder="Nombre.."
                value={input.firstName}
                name="firstName"
                onChange={handleChange}
              />
              <div className={stylesRegister.validacion}>
              {errors.firstName }</div>
<div></div>

              <label className={stylesRegister.Texto}>Apellido: </label>
              <input
                className={stylesRegister.inputData}
                type="text"
                placeholder="Apellido.."
                value={input.lastName}
                name="lastName"
                onChange={handleChange}
              />
                            <div className={stylesRegister.validacion}>
              {errors.lastName }</div>
<div></div>

              <label className={stylesRegister.Texto}>DNI: </label>
              <input
                className={stylesRegister.inputData}
                type="number"
                placeholder="DNI.."
                value={input.dni}
                name="dni"
                onChange={handleChange}
              />
            <div className={stylesRegister.validacion}>
              {errors.dni }</div>
<div></div>
        <label className={stylesRegister.Texto}>
                Direccion:
              </label>
              <input
                className={stylesRegister.inputData}
                type="text"
                placeholder="Direccion.."
                value={input.address}
                name="address"
                onChange={handleChange}
              />
          <div className={stylesRegister.validacion}>
              {errors.address }</div>
<div></div>
 <label className={stylesRegister.Texto}>Usuario: </label>
              <input
                className={stylesRegister.inputData}
                type="text"
                placeholder="usuario.."
                value={input.username}
                name="username"
                onChange={handleChange}
              />

     <div className={stylesRegister.validacion}>
              {errors.username }</div>
<div></div>
  <label className={stylesRegister.Texto}>
                Contraseña:
              </label>
              <input
                className={stylesRegister.inputData}
                type="password"
                placeholder="Contraseña..."
                value={input.password}
                name="password"
                onChange={handleChange}
              />

                   <div className={stylesRegister.validacion}>
              {errors.password }</div>
<div></div>
 <label className={stylesRegister.Texto}>
                Fecha Ingreso:
              </label>
        
              <input
                className={stylesRegister.inputData}
                type="date"
                placeholder="fecha Ingreso.."
                value={input.inputDate}
                name="inputDate"
                onChange={handleChange}
              />

         <div className={stylesRegister.validacion}>
              {errors.inputDate }</div>
<div></div>
  <label className={stylesRegister.Texto}>
                Dia de pago:
              </label>
              <input
                className={stylesRegister.inputData}
                type="number"
                placeholder="dia.."
                value={input.payDay}
                name="payDay"
                onChange={handleChange}
              />
        
      <div className={stylesRegister.validacion}>
              {errors.payDay }</div>
<div></div>
            </div>
            <div className={stylesRegister.grid3}>
              <button className={stylesRegister.botones}
                type='submit'
                onClick={(e) => handleSubmit(e)}
              >Registrarse</button>
                   </div>
             </form>
        </div>
      </div>
     );
}
