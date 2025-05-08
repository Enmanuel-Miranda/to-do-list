const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || '3306',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'bd_ToDoApp'
});

connection.connect((error) => {
  if (error){
    console.error('Error al conectarse a la Base de datos:', error.message)
  }
  console.log('Conectado a la BD!!!!!');
});

module.exports = connection;
