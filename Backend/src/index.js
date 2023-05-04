import express from 'express'
import  routerComandas from './routes/routes.comandas.js'
import  routerUsers from './routes/routes.users.js'
import  routerProducts from './routes/routes.products.js'
//import  './db.js'
const app = express()  
app.use('/',routerComandas)
app.use('/',routerUsers)
app.use('/',routerProducts)
const server = app.listen(8080,() => {console.log('server connected at 8080')})


