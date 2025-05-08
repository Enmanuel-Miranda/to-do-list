const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const app = express();

//Middleare
app.use(cors()) //Permite el acceso a la API desde cualquier origen
app.use(express.json()) //Parsea las peticiones a JSON

const PORT =  process.env.PORT || 3000;

const taskRoutes = require('./routes/task.routes');
app.use('/api/task', taskRoutes);
  

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})
