import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import {Logout}from '../../actions/index.jsx'

export function Quit() {
const dispatch=useDispatch()
//const resultLogin=useSelector((state)=>state.resultLogin)
const user=useSelector((state)=>state.user)
useEffect(()=>{
dispatch(Logout(user))
},[dispatch,user])

    return(
<div>salir</div>
)
}