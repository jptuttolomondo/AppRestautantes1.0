import { Router } from "express";
import cookieParser from "cookie-parser";
const router=Router()
router.get('/set-cookies',(req,res)=>{
    res.cookie('appresto',
    'cookie resto seteada',
    {maxAge:30000}
    ).send('cookie seteada respuesta')
})
router.get('/cookies',(req,res)=>{
    res.send('cookie seteada get')
})
router.get('/delete-cookie',(req,res)=>{
    res.clearCookie('appresto').send('cookie borrada')
})
router.get('/set-signed-cookie',(req,res)=>{
    res.cookie(
    'appresto',
    'cookie firmada',
    {maxAge:30000,signed:true}
    ).send(req.signedCookies)
})
export default router