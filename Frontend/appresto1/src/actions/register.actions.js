import axios from 'axios'
export const CREAR_USUARIO='CREAR_USUARIO'


export function postCreateUser(payload) {
    return async function (dispatch) {
        var response = await axios.post('http://localhost:8080/register', payload)
    alert(response.data.message)
        return dispatch({ type: CREAR_USUARIO, payload: response.data })
    }
}