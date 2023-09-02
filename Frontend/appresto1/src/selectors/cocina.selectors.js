import {  useSelector } from "react-redux";

export const useUserSelector = ()=>useSelector((state) => state.loginReducer.user);
export const useGetComandasForCocinaSelector=()=>useSelector((state) => state.cocinaReducer.getComandasForCocina);