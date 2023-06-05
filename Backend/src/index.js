import express from 'express'
import mongoose from'mongoose';
import  routerComandas from './routes/routes.comandas.js'
import  routerUsers from './routes/routes.users.js'
import  routerProducts from './routes/routes.products.js'
import  routerItems from './routes/routes.items.js'
import routerMesas from './routes/routes.mesas.js'
import routerSessions from'./routes/routes.sessions.js'
import session from 'express-session'
import MongoStore from "connect-mongo";
import cookieParser from 'cookie-parser';

import cors from 'cors';

const app = express()  
app.use(cookieParser());
app.use(cors());
app.use(express.json())
app.use(express.urlencoded())


const server = app.listen(8080,() => {console.log('server connected at 8080')})


try {//ver de poner el nombre de la base de datos, asi no usa test en atlas
mongoose.connect('mongodb+srv://adminappresto:Goring2311*@clusterappresto.ud9f7tf.mongodb.net/?retryWrites=true&w=majority')
console.log('db connection established')
} 
catch (error) {console.error(error)}  


app.use(session({
    store:MongoStore.create({
        client:mongoose.connection.getClient(),
        ttl:3600
    }),
    secret:'Goring2311*',
    resave:true,
    saveUninitialized:true
}))

app.use('/',routerComandas)
app.use('/',routerUsers) 
app.use('/',routerProducts)
app.use('/',routerItems)
app.use('/',routerMesas)
app.use('/',routerSessions)