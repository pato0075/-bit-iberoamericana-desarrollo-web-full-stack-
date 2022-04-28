//llamar express
const express = require ("express");

//llamar mongoose
const mongoose = require ("mongoose");

//llamar la variable de entorno dotenv
const dotenv = require ("dotenv");

dotenv.config();

//metodo para utilizar la variable de entorno process,env
mongoose.connect(process.env.MONGODB_URI)
.then(() =>console.log("se conecto con mongoDB:true"))
.catch(()=> console.log("error de conexion:false"))


const server = express()

server.get("/", (req, res)=>{
    try {
        res.send("hola mundo desde la raiz")
    } catch (error) {
        res.send("un error")    
    }
})

//crud
server.post('/api/v1/todos', (req, res)=>{
    try {
        res.send("Crear tarea")
    } catch (error) {
        res.send("un error")    
    }
})

server.get('/api/v1/todos', (req, res)=>{
    try {
        res.send("Leer todas las tareas")
    } catch (error) {
        res.send("un error")    
    }
})

server.get('/api/v1/todos:id', (req, res)=>{
    try {
        res.send("Leer una tarea especifica")
    } catch (error) {
        res.send("un error")    
    }
})

server.put('/api/v1/todos:id', (req, res)=>{
    try {
        res.send("Actualizar una tarea especifica")
    } catch (error) {
        res.send("un error")    
    }
})

server.delete('/api/v1/todos:id', (req, res)=>{
    try {
        res.send("Eliminar una tarea Especifica")
    } catch (error) {
        res.send("un error")    
    }
})



server.listen (3000, ()=> console.log("servidor en el puerto 3000"))




