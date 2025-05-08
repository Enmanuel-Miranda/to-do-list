const express = require('express')
const router = express.Router();

const db= require('../db/connection');

router.get("/", (req, res) => {
    res.send("Este es el listado de todos los usuarios");
    const query = 'SELECT * FROM country;'
    db.query(query,(err, results ) =>{
        if(err){
            console.error('Error Al obtener resultados', err.message);
            return res.status(500).json({error:'error del servidor'})
        }
        res.json(results)
    })

  });
  
  router.post("/", (req, res) => {
    const { nombre, apellido } = req.body;
    res.send(`Se ha creado el usuario ${nombre} ${apellido}`);
  });
  
  router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, apellido } = req.body;
    res.send(`Se ha actualizado el usuario ${nombre} ${apellido}`);
  });
  
  router.delete("/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Se ha eliminado el usuario con Id ${id}`);
  });
  
  module.exports = router
