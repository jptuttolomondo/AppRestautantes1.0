# AppRestautantes1.0
Aplicación para restaurantes y Cafetería. Versión de desarrollo 1.0
# Descripción
![imagen](image.jpg)


# User Stories

# FrontEnd
frameworks  , tools, hooks and modules a usar 
React: react reac-dom reac-script web-vitals
Store, redux,actions
Store: @reduxjs/toolkit, redux-thunk
redux: react-redux, Provider


Respecto de la presentación, el frontend presentara una estructura de pages como sigue.
No es necesario la presentación de fotos con productos para la carga de poductos en la comanda. Selecciona un producto de la lista y se selecciona cantidad y listo.
Los productos con fotos pueden tenerse en una pagina aparte y los clientes tienen una hoja con fotos.


## Landing
## Mozos
## Cocina
## Caja
## Admin


# Backend
Modulos, frameworks, ttools a usar.
Node- websockets- 

Tendrá las siguientes rutas paara la gestion y presentacion de cada operación:
## GET

## POST

## PUT  

## DELETE

# dataBase
La base de datos será NoSql, administrado con MongoDb, donde cada comanda sera un documento en BSON y tendrá la esructura siguiente:
modelo de json
document: libro diario
[
  comanda:  {
        idComanda: uuid
        fecha:date,
        hora:time,
        mesa:char,
        mozo:string,
total:Number,
estado: tipo,
pedido:[
    {cantidad:number, 
    nombre producto:string,
    precio unitario:number,
    subtotal:number,    
     },{}..{}
    ]
    },
{},{}..{},
caja inicial:number,
total diario efectivo:Number,
total diario tarjetas:Number,
total diario transferencias:Number,
total diario:Number,
gastos diarios:[
    {descripcion del gasto:string,
    monto: number,
    usuario:user},{}...{},
    total gastos diarios:number ],
    caja final:number
]
document: usuarios
[
nombre:string,
dni:number,
domicilio: string,
username:string,
password:string,
//como vincular a un mozo con una caja??

]

# Users
Existirán tres categorias de usuarios.
- Mozo:
- Cocinero:
- Admin:
