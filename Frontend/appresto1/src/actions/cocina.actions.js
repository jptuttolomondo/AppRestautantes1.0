import axios from 'axios'
export const GET_COMANDAS_FOR_COCINA='GET_COMANDAS_FOR_COCINA'


export function getComandasForCocina(){
 return async function(dispatch) {
const result  =await axios.get('http://localhost:8080/comandas/cocina')
    return dispatch({type: GET_COMANDAS_FOR_COCINA, payload:result.data.result})
}
}