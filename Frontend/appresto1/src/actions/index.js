
import axios from 'axios'

export function getAllProducts() {
    return async function (dispatch) {
      
            const response = await axios.get('http://localhost:8080/products')

        return dispatch({ type: 'GET_ALL_PRODUCTS', payload: response.data.result })

      
    }
}


export function getAllcategories() {
    return async function (dispatch) {
        var response = await axios.get('http://localhost:8080/categories')
        return dispatch({ type: 'GET_ALL_CATEGORIES', payload: response.data })
    }
}

export function getAllMesas() {
    return async function (dispatch) {
        var response = await axios.get('http://localhost:8080/mesas')
    
        return dispatch({ type: 'GET_ALL_MESAS', payload: response.data.result })
    }
}

export function getComandaId(id) {
    return async function (dispatch) {
        var response = await axios.get(`http://localhost:8080/comanda/${id}`)
        return dispatch({ type: 'GET_COMANDA_ID', payload: response.data })
    }
}

export function confirmarItem(payload) {//USO ESTA
    return async function (dispatch) {
  
       // var response = await axios.post('http://localhost:8080/item', payload)
      
        return dispatch({ type: 'CONFIRMAR_ITEM', payload: payload })
    }
}

export function incrementar(payload) {
    return function (dispatch) {
        return dispatch({ type: 'INCREMENTAR_CANTIDAD', payload: payload })
    }
}

export function decrementar(payload) {
    return function (dispatch) {
        return dispatch({ type: 'DECREMENTAR_CANTIDAD', payload: payload })
    }
}


export function limpiarEstados(item) {
    return function (dispatch) {
        return dispatch({ type: 'LIMPIAR_ESTADOS', payload: item })
    }
}

export function postComanda(payload) {//USO ESTA
    return async function (dispatch) {
        var response = await axios.post('http://localhost:8080/comanda', payload)
        return dispatch({ type: 'POST_COMANDA', payload: response.data.payload._id })
    }
}


export function actualizarComandaCantidad() {
    return function (dispatch) {
        return dispatch({ type: 'ACTUALIZAR_COMANDA_CANTIDAD' })
    }
}


export function actualizarProducto(payload) {
    return function (dispatch) {
        return dispatch({ type: 'ACTUALIZAR_PRODUCTO', payload: payload })
    }

}


export function calcularSubtotal() {
    return function (dispatch) {
        return dispatch({ type: 'CALCULAR_SUBTOTAL' })
    }
}

export function actualizarItem(payload) {
    return function (dispatch) {
        return dispatch({ type: 'ACTUALIZAR_ITEM', payload: payload })
    }
}

export function actualizarComandaMesa(payload) {//USO ESTA
    return function (dispatch) {
        return dispatch({ type: 'ACTUALIZAR_COMANDA_MESA', payload: payload })
    }
}

export function actualizarComandaItemProducto(payload) {
    return function (dispatch) {
        return dispatch({ type: 'ACTUALIZAR_COMANDA_ITEM_PRODUCTO', payload: payload })
    }
}

export function calcularTotal(payload) {
    return function (dispatch) {
        let totalComanda = 0
        totalComanda = payload.reduce((acumulador, elem) => {
            return acumulador + elem.subtotalItem
        }, 0)
        return dispatch({ type: 'CALCULAR_TOTAL', payload: totalComanda })
    }
}

export function clearMessages() {
    return function (dispatch) {
        return dispatch({ type: 'CLEAR_MESSAGES', payload: [] })
    }
}

export function actualizarItemsTotal(payload) {
    return function (dispatch) {
        return dispatch({ type: 'ACTUALIZAR_ITEMS_TOTAL', payload: payload })
    }
}


export function actualizarComanda(payload, idComanda) {//USO ESTA
    return function (dispatch) {
        payload = { ...payload, idComanda: idComanda }
        return dispatch({ type: 'ACTUALIZAR_COMANDA', payload: payload })
    }
}


export function postCreateUser(payload) {
    return async function (dispatch) {
        var response = await axios.post('http://localhost:8080/user', payload)
        console.log(response.data)
        return dispatch({ type: 'CREAR_USUARIO', payload: response.data })
    }
}

export function LoginUser(payload) {
    return async function (dispatch) {
        var respuesta = await axios.post('http://localhost:8080/login', payload)
        console.log(respuesta)
        if (respuesta.status === 200) {
        
             alert('Usuario Logueado')
          
            return dispatch({ type: 'LOGIN', payload:respuesta.data,status:respuesta.status})
        }
        else alert(respuesta.data.error)
        return dispatch({ type: 'LOGIN', payload: [] })
    }
}

export function Logout(payload) {
    return async function (dispatch) {
        var response = await axios.get('http://localhost:8080/logout', payload)
        return dispatch({ type: 'LOGOUT', payload: [response] })
    }
}


export function itemSelection (payload) {

    return function(dispatch){
    
       return dispatch ({type:'ITEM_SELECTED', payload: payload})
    }
}