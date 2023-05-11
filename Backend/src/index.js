import express from 'express'
import mongoose from'mongoose';
import  routerComandas from './routes/routes.comandas.js'
import  routerUsers from './routes/routes.users.js'
import  routerProducts from './routes/routes.products.js'
import  routerItems from './routes/routes.items.js'
//import  './db.js'
const app = express()  
app.use(express.json())
app.use(express.urlencoded())
app.use('/',routerComandas)
app.use('/',routerUsers)
app.use('/',routerProducts)
app.use('/',routerItems)

const server = app.listen(8080,() => {console.log('server connected at 8080')})


try {
mongoose.connect('mongodb+srv://adminappresto:Goring2311*@clusterappresto.ud9f7tf.mongodb.net/?retryWrites=true&w=majority')
console.log('db connection established')
}
catch (error) {console.error(error)} 