const db = require('../db/connection');


const getAllTasks = (req, res) => {
  const query = 'SELECT * FROM tasks;';
  db.query(query, (err, results) => {
    if(err){
      console.error('ERROR AL OBTENER RESULTADOS', err.message);
      return res.status(500).json({error: 'error del servidor'})
    }
    res.json(results)
  })
}


const getTaskByCode = (req, res) => {
  const {code} = req.params;
  const query = 'SELECT * FROM tasks WHERE id = ?;';
  db.query(query, [code], (err, results) => {
    if(err){
      console.error('ERROR AL OBTENER RESULTADOS', err.message);
      return res.status(500).json({error: 'error del servidor'})
    }
    res.json(results)
  })
}

const createTask = (req, res) => {
  const {Title} = req.body;
  const query = `INSERT INTO tasks (title)
  VALUES (?);`;
  db.query(query, [Title], (err, results) => {
    if(err){
      console.error('ERROR AL OBTENER RESULTADOS', err.message);
      return res.status(500).json({error: 'error del servidor'})
    }
    res.json(results)
  })
}


//Actualizar las tareas
const updateTask = (req, res) => {
  const {Title} = req.body; 
  const {Id} = req.params;
  const query = 'UPDATE tasks SET title= ? WHERE id = ?;';
  db.query(query, [Title,Id], (err, results) => {
    if(err){
      console.error('ERROR AL OBTENER RESULTADOS', err.message);
      return res.status(500).json({error: 'error del servidor'})
      
    }
    //console.log('se actualizo la tarea $(Title) con el id $(Id)');
    res.json(results)
  })
}

//Eliminar tareas las tareas
const deleteTask = (req, res) => {
  const {Id} = req.params;
  const query = 'DELETE FROM tasks WHERE id = ?;';
  db.query(query, [Id], (err, results) => {
    if(err){
      console.error('ERROR AL OBTENER RESULTADOS', err.message);
      return res.status(500).json({error: 'error del servidor'})
    }
    //console.log('se actualizo la tarea $(Title) con el id $(Id)');
    res.json(results)
  })
}

const printMessage = (req, res) => {
  const {message} = req.body;
  console.log(message);
  res.json({message: 'Mensaje recibido'})
}


module.exports = {
  getAllTasks,
  getTaskByCode,
  createTask,
  updateTask,
  deleteTask,
  printMessage
}

