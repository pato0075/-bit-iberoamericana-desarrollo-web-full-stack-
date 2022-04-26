//llamar express
const express = require ("express");

//llamar mongoose
const mongoose = require ("mongoose");

const server = express()

server.get("/", (req, res)=>{
    try {
        res.send("hola mundo desde la raiz")
    } catch (error) {
        res.send("un error")    
    }
})
server.listen (3000, ()=> console.log("servidor en el puerto 3000"))


mongoose.connect(mongodb+srv://dandev82:<duckman80173306>@cluster0.we5tf.mongodb.net/bitdev82?retryWrites=true&w=majority));
.then(() =>console.log("se conecto con mongoDB:true"))
.catch (()=> console.log("error de conexion:false"))


