import axios from 'axios'
export const LOGIN='LOGIN'
export const LOGOUT='LOGOUT'

export function LoginUser(payload) {
    return async function (dispatch) {
        var respuesta = await axios.post('http://localhost:8080/login', payload)
        if (respuesta.status === 200) {
            alert('Usuario Logueado')
            return dispatch({ type: LOGIN, payload:respuesta.data,status:respuesta.status})
        }
        else alert(respuesta.data.error)
        return dispatch({ type:LOGIN, payload: [] })
    }
}

export function Logout(payload) {
    return async function (dispatch) {
        var response = await axios.get('http://localhost:8080/logout', payload)
        return dispatch({ type: LOGOUT, payload: [response] })
    }
}
