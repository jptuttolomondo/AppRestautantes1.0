import axios from "axios";
export const GET_COMANDAS_FOR_COCINA = "GET_COMANDAS_FOR_COCINA";
export const GET_COMANDA_BY_ID = "GET_COMANDA_BY_ID";
export const CHANGE_STATE_COMANDA = "CHANGE_STATE_COMANDA";

export function getComandasForCocina() {
  return async function (dispatch) {
    const result = await axios.get("http://localhost:8080/comandas/cocina");
    return dispatch({
      type: GET_COMANDAS_FOR_COCINA,
      payload: result.data.result,
    });
  };
}

export function PasarComanda(payload) {
  return async function (dispatch) {
    return dispatch({ type: GET_COMANDA_BY_ID, payload: payload });
  };
}

export function ChangeStateAndUpdateComanda(comanda) {
  return async function (dispatch) {
    const result = await axios.put(
      `http://localhost:8080/comandas/cocina/${comanda._id}`,
      comanda
    );
    alert(result.data.status);
    return dispatch({ type: GET_COMANDA_BY_ID, payload: comanda });
  };
}
