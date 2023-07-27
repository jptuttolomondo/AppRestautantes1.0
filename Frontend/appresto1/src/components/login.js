import { useEffect, useState } from 'react';
import './atencionMesas.css';
import searchBarStyle from './login.module.css';
import { Link, redirect } from 'react-router-dom'
import { LoginUser } from './../actions/index.js'
import { Home } from './home.js'
import { useDispatch, useSelector } from 'react-redux';

export function Login() {
  const dispatch = useDispatch()
  const resultLogin = useSelector((state) => state.resultLogin)
  const usuario = useSelector((state) => state.user)
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
      <div align="center">
        <div className="Mesas-body">
          <div className="Mesas-header">
            <div className="Mesas-titulo">Aplicación para <br></br> Restaurantes/Café</div>
          </div>
          <Link to="/home"><div className="Mesas-atras">Atras</div></Link>
          <form onSubmit={(e) => handleSubmit(e)} >
            <div className="Mesas-subtitulo">Usuarios</div>
            <div className={searchBarStyle.bloque}>
              <div className={searchBarStyle.usuarioTexto}  >Usuario: </div>
              <input className={searchBarStyle.inputLogin}
                type='text'
                value={user.username}
                name='username'
                placeholder='Usuario..'
                onChange={handleChange}
              />
              <div className={searchBarStyle.contraseñatexto}  >Contraseña: </div>
              <input
                className={searchBarStyle.inputPassword}
                type='password'
                value={user.password}
                name='password'
                placeholder='Contraseña...'
                onChange={handleChange}
              />
              <button className={searchBarStyle.botonLogin}
                type='submit'
                onClick={(e) => handleSubmit(e)}
              >Login</button>
            </div>
          </form>
          <Link to='/register'><div className={searchBarStyle.botonRegister} >Registrarse </div></Link>
        </div>
      </div>
  );
}
