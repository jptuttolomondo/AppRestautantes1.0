import { useState } from 'react';

import loginStyle from '../styles/login.module.css';
import { Link } from 'react-router-dom'
import { LoginUser } from '../../actions/login.actions.js'
import { Home } from '../home/home.js'
import { useDispatch, useSelector } from 'react-redux';
export function Login() {
  const dispatch = useDispatch()
  const resultLogin = useSelector((state) => state.loginReducer.resultLogin)

  //const usuario = useSelector((state) => state.user)
  const [user, setUser] = useState({
    username: '',
    password: ''
  })
  function handleSubmit(e) {
    if (user.username === "" || user.password === '') {
      e.preventDefault()
      alert("Completar correctamente el formulario")
    } else {
      e.preventDefault()
      dispatch(LoginUser(user))
    }
  }

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  return (
    resultLogin === 200 ? <Home /> :
      <div>

<header 
className= {`${loginStyle.header} ${loginStyle.fondoHeader} 
${loginStyle.tituloHeader} ${ loginStyle.letraHeader}`}
>Aplicación para <br/> Restaurantes/Cafe</header>

  <div className={loginStyle.fondo}>
    <div className={loginStyle.grid1}>
  <Link to="/"><div className={loginStyle.atras}>Atras</div></Link>
  <div className={loginStyle.cartel}>Usuarios</div>
  </div>
  <form onSubmit={(e) => handleSubmit(e)}>
    <div  className={loginStyle.grid2}>

  <div className={loginStyle.Texto}  >Usuario: </div>

   <input className={loginStyle.inputData}
                type='text'
                value={user.username}
                name='username'
                placeholder='Usuario..'
                onChange={handleChange}
              />
         <div className={loginStyle.Texto}  >Contraseña: </div>

        <input
                className={loginStyle.inputData}
                type='password'
                value={user.password}
                name='password'
                placeholder='Contraseña...'
                onChange={handleChange}
              />
</div>
<div className={loginStyle.grid3}>
              <button className={loginStyle.botones}
                type='submit'
                onClick={(e) => handleSubmit(e)}
              >Login</button>
            
        
          <Link to='/register'><div className={loginStyle.botones} >Registrarse </div></Link>
</div>
          </form>
  </div>     
   </div>
  );
}













/*  <div className={loginStyle.Mesasbody1}>
          <div className={loginStyle.Mesasheader1}>
            <div className={loginStyle.Mesastitulo1}>Aplicación para <br></br> Restaurantes/Café</div>
          </div>
          <Link to="/"><div className={loginStyle.Mesasatras1}>Atras</div></Link>
          <form onSubmit={(e) => handleSubmit(e)} >
            <div className={loginStyle.Mesassubtitulo1}>Usuarios</div>
            <div className={loginStyle.bloque}>
              <div className={loginStyle.usuarioTexto}  >Usuario: </div>
              <input className={loginStyle.inputLogin}
                type='text'
                value={user.username}
                name='username'
                placeholder='Usuario..'
                onChange={handleChange}
              />
              <div className={loginStyle.contraseñatexto}  >Contraseña: </div>
              <input
                className={loginStyle.inputPassword}
                type='password'
                value={user.password}
                name='password'
                placeholder='Contraseña...'
                onChange={handleChange}
              />
              <button className={loginStyle.botonLogin}
                type='submit'
                onClick={(e) => handleSubmit(e)}
              >Login</button>
            </div>
          </form>
          <Link to='/register'><div className={loginStyle.botonRegister} >Registrarse </div></Link>
        </div>*/