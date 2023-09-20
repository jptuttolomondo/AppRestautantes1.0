import {  useSelector } from "react-redux";

export const useUserSelector = ()=>useSelector((state) => state.loginReducer.user);
export const useGetComandasForCocinaSelector=()=>useSelector((state) => state.cocinaReducer.getComandasForCocina);
export const useGetComandaByIdSelector = ()=>useSelector((state) => state.cocinaReducer.getComandaById);
export const useChangeStateComandaSelector = ()=>useSelector((state) => state.cocinaReducer.ChangeStateComanda);