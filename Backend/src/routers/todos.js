//crear const express y const router
const { request } = require("express");
const express = require("express");
const router = express.Router();

//importar const schema de todosmodels
const todosSchema = require('../models/todos');


//crud rutas 
router.post('/todos', (req, res)=>{
    try {
       // res.send("Crear tarea");
    } catch (error) {
        res.send("un error")    
    }

    const newTodo = todosSchema(request.body); 

    newTodo
    .save()
    .then((data) =>res.json({success: data}))
    .catch((err) =>res.json({failured: err}));

    
})

router.get('/todos', (req, res)=>{
    try {
        res.send("Leer todas las tareas")
    } catch (error) {
        res.send("un error")    
    }
})

router.get('/todos:id', (req, res)=>{
    try {
        res.send("Leer una tarea especifica")
    } catch (error) {
        res.send("un error")    
    }
})

router.put('/todos:id', (req, res)=>{
    try {
        res.send("Actualizar una tarea especifica")
    } catch (error) {
        res.send("un error")    
    }
})

router.delete('/todos:id', (req, res)=>{
    try {
        res.send("Eliminar una tarea Especifica")
    } catch (error) {
        res.send("un error")    
    }
})

module.exports = router;