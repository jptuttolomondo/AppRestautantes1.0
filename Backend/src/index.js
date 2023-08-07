import express from "express";
import cors from "cors";
import './config/config.js'
import './dao/Factory/factory.js'
import routerComandas from "./routes/routes.comandas.js";
 import routerUsers from "./routes/routes.users.js";
import routerProducts from "./routes/routes.products.js";
 import routerItems from "./routes/routes.items.js";
import routerMesas from "./routes/routes.mesas.js";
// import routerCookies from "./routes/routes.cookies.js";
 import routerSessions from "./routes/routes.sessions.js";
//import routerRegister from './routes/routes.register.js'
const { PORT } = process.env;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", routerComandas);
app.use("/", routerUsers);
app.use("/", routerProducts);
app.use("/", routerItems);
app.use("/", routerMesas);
app.use("/", routerSessions);
// app.use("/", routerCookies);
//router.use("/",routerRegister)

app.listen(PORT, () => {
  console.log(`server connected at ${PORT}`);
});


// app.use(session({
//     store:MongoStore.create({
//         client:mongoose.connection.getClient(),
//         ttl:3600
//     }),
//     secret:'Goring2311*',
//     resave:true,
//     saveUninitialized:true
// }))



