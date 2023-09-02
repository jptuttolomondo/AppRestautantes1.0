import {  useSelector } from "react-redux";

export const useUserSelector = ()=>useSelector((state) => state.loginReducer.user);
export const useMesasSelector = ()=>useSelector((state) => state.mesasReducer.mesas);
export const useMesaComandaSelector =()=> useSelector((state) => state.mesasReducer.MesaComanda);
export const useCantidadSelector = ()=>useSelector((state) => state.mesasReducer.cantidadItem);
export const useItemsTotalArraySelector = ()=>useSelector((state) => state.mesasReducer.itemsTotal);
export const useTotalSelector = ()=>useSelector((state) => state.mesasReducer.total);
export const useSubtotalItemSelector = ()=>useSelector((state) => state.mesasReducer.subtotalItem);
export const useProductosSelector = ()=>useSelector((state) => state.mesasReducer.products);
export const useItemSelectSelector =()=> useSelector((state) => state.mesasReducer.itemSelected);
export const useComandaCreadaSelector =()=> useSelector((state) => state.mesasReducer.comandaCreada);