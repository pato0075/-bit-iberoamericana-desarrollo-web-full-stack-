/*llamar express*/
const express = require ("express");

/*llamar mongoose*/
const mongoose = require ("mongoose");

/*llamar la variable de entorno dotenv*/
const dotenv = require ("dotenv");
dotenv.config();

/*crear const router e importar la ruta*/
const todosRouters = require('./routers/todos');

/*metodo para utilizar la variable de entorno process,env*/
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

/*le decimos al servidor que ruta usar*/
server.use('/api/v1',todosRouters);


server.use(express.json());
server.listen (3000, ()=> console.log("servidor en el puerto 3000"))




