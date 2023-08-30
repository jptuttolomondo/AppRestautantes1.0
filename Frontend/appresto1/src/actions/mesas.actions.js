import axios from 'axios'
export const ITEM_SELECTED='ITEM_SELECTED'
export const ACTUALIZAR_ITEMS_TOTAL='ACTUALIZAR_ITEMS_TOTAL'
export const ACTUALIZAR_COMANDA= 'ACTUALIZAR_COMANDA'
export const POST_COMANDA='POST_COMANDA'
export const CLEAR_PRODUCTS_SELECTOR='CLEAR_PRODUCTS_SELECTOR'
export const ACTUALIZAR_COMANDA_CANTIDAD= 'ACTUALIZAR_COMANDA_CANTIDAD' 
export const ACTUALIZAR_PRODUCTO='ACTUALIZAR_PRODUCTO'
export const CALCULAR_SUBTOTAL='CALCULAR_SUBTOTAL'
export const ACTUALIZAR_ITEM='ACTUALIZAR_ITEM'
export const ACTUALIZAR_COMANDA_MESA= 'ACTUALIZAR_COMANDA_MESA'
export const ACTUALIZAR_COMANDA_ITEM_PRODUCTO='ACTUALIZAR_COMANDA_ITEM_PRODUCTO'
export const CALCULAR_TOTAL='CALCULAR_TOTAL'
export const GET_ALL_PRODUCTS='GET_ALL_PRODUCTS'
export const GET_ALL_CATEGORIES='GET_ALL_CATEGORIES'
export const GET_ALL_MESAS='GET_ALL_MESAS'
export const GET_COMANDA_ID='GET_COMANDA_ID'
export const CONFIRMAR_ITEM='CONFIRMAR_ITEM'
export const INCREMENTAR_CANTIDAD='INCREMENTAR_CANTIDAD'
export const DECREMENTAR_CANTIDAD='DECREMENTAR_CANTIDAD'
export const LIMPIAR_ESTADOS='LIMPIAR_ESTADOS'
export const CLEAR_MESSAGES='CLEAR_MESSAGES'
export const CLEAR_ALL_STATES='CLEAR_ALL_STATES'

export function itemSelection (payload) {
  
    return function(dispatch){

       return dispatch ({type:ITEM_SELECTED, payload: payload})
    }
}

export function actualizarItemsTotal(payload) {
    return function (dispatch) {
        return dispatch({ type: ACTUALIZAR_ITEMS_TOTAL, payload: payload })
    }
}


export function actualizarComanda(payload, idComanda) {//USO ESTA
    return function (dispatch) {
        payload = { ...payload, idComanda: idComanda }
        return dispatch({ type: ACTUALIZAR_COMANDA, payload: payload })
    }
}


export function postComanda(payload) {//USO ESTA
    return async function (dispatch) {
        var response = await axios.post('http://localhost:8080/comanda', payload)
        if(response.data.status==='success') alert('Comanda registrada')
        else alert('Error: ' + response.data.message)
        return dispatch({ type: POST_COMANDA, payload: response.data })
    }
}



export function clearProductsSelector() {//USO ESTA
    return async function (dispatch) {
       
        return dispatch({ type: CLEAR_PRODUCTS_SELECTOR, payload: [] })
    }
}


export function actualizarComandaCantidad() {
    return function (dispatch) {
        return dispatch({ type: ACTUALIZAR_COMANDA_CANTIDAD})
    }
}


export function actualizarProducto(payload) {
    return function (dispatch) {
        return dispatch({ type: ACTUALIZAR_PRODUCTO, payload: payload })
    }

}


export function calcularSubtotal() {
    return function (dispatch) {
        return dispatch({ type: CALCULAR_SUBTOTAL })
    }
}

export function actualizarItem(payload) {
    return function (dispatch) {
        return dispatch({ type: ACTUALIZAR_ITEM, payload: payload })
    }
}

export function actualizarComandaMesa(payload) {//USO ESTA
    return function (dispatch) {
        return dispatch({ type: ACTUALIZAR_COMANDA_MESA, payload: payload })
    }
}

export function actualizarComandaItemProducto(payload) {
    return function (dispatch) {
        return dispatch({ type: ACTUALIZAR_COMANDA_ITEM_PRODUCTO, payload: payload })
    }
}

export function calcularTotal(payload) {
    return function (dispatch) {
        let totalComanda = 0
        totalComanda = payload.reduce((acumulador, elem) => {
            return acumulador + elem.subtotalItem
        }, 0)
        return dispatch({ type: CALCULAR_TOTAL, payload: totalComanda })
    }
}

export function getAllProducts() {
    return async function (dispatch) {
      
            const response = await axios.get('http://localhost:8080/products')

        return dispatch({ type: GET_ALL_PRODUCTS, payload: response.data.result })

      
    }
}


export function getAllcategories() {
    return async function (dispatch) {
        var response = await axios.get('http://localhost:8080/categories')
        return dispatch({ type: GET_ALL_CATEGORIES, payload: response.data })
    }
}

export function getAllMesas() {
    return async function (dispatch) {
        var response = await axios.get('http://localhost:8080/mesas')
    
        return dispatch({ type: GET_ALL_MESAS, payload: response.data.result })
    }
}

export function getComandaId(id) {
    return async function (dispatch) {
        var response = await axios.get(`http://localhost:8080/comanda/${id}`)
        return dispatch({ type: GET_COMANDA_ID, payload: response.data })
    }
}

export function confirmarItem(payload) {//USO ESTA
    return async function (dispatch) {    
        return dispatch({ type: CONFIRMAR_ITEM, payload: payload })
    }
}

export function incrementar(payload) {
    return function (dispatch) {
     
        if(payload.length===0) return dispatch({ type: INCREMENTAR_CANTIDAD, payload: 1 })
        else {let cantidadNueva=payload +1
            return dispatch({ type: INCREMENTAR_CANTIDAD, payload: cantidadNueva })}

    }
}

export function decrementar(payload) {
    return function (dispatch) {
        let cantidadNueva=payload -1
        return dispatch({ type: DECREMENTAR_CANTIDAD, payload: cantidadNueva})
    }
}


export function limpiarEstados(item) {
    return function (dispatch) {
        return dispatch({ type: LIMPIAR_ESTADOS, payload: item })
    }
}


export function clearAllStates() {
    return function (dispatch) {
        return dispatch({ type: CLEAR_ALL_STATES })
    }
}


export function clearMessages() {
    return function (dispatch) {
        return dispatch({ type: CLEAR_MESSAGES, payload: [] })
    }
}

