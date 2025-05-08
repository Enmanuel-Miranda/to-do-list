import React, { useEffect, useState } from 'react';
import TaskCard from "../components/TaskCard";
import "../styles/index.css";
import { TaskServices } from "../services";
import type { TaskType } from "../types/TaskType";
import axios from 'axios';


function App() {

  // Obtener tareas
  const [tasks, setTasks] = useState<any>([]); //Creamos un estado para almacenar las tareas, el tipo puede ser el archivo que creamos <TaskType[]>
  const [loading, setLoading] = useState(false);

  // Crear Tarea: Nuevo estado para el título de la nueva tarea
  const [newTaskTitle, setNewTaskTitle] = useState<any>(''); //le podemos mantener con un array [] useState<any>([]) pero para que no de error le cambiamos a un string ''

  //funciones *************************************************

  // Obtener las tareas
  const fetchTasks2 = async () => {
    setLoading(true);
    const response = await axios.get('http://localhost:3000/api/task/');
    console.log("RESPUESTA", response);
    setTasks(response.data)
    setLoading(false);
  }

  // Crear las tareas
  const createTask2 = async () => {
    if (newTaskTitle.trim()) {
      try {
        const newTaskData = { Title: newTaskTitle };
        const response = await axios.post('http://localhost:3000/api/task/', newTaskData);
        console.log("RESPUESTA (POST - Nueva tarea):", response.data);
        // Actualizar el estado local de las tareas con la nueva tarea
        setTasks([...tasks, response.data]); 
        // Limpiar el input
        setNewTaskTitle('');
        fetchTasks2(); // actualiza las tareas , tambien en el front
      } catch (error) {
        console.error("Error al crear la tarea:", error);
      }
    } else {
      alert("Por favor, ingresa un título para la tarea.");
    }

  };
// funcion el boton añadir
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(event.target.value);
  };


  // Eliminar las tareas
  const deleteTask2 = async (Id: number) => {
    try {
      //const response = await axios.delete(`http://localhost:3000/api/task/${id}`);
      await axios.delete(`http://localhost:3000/api/task/${Id}`);
      console.log(`Tarea con ID ${Id} eliminada.`);
      // Actualizar el estado local para remover la tarea eliminada
      setTasks(tasks.filter((task: any) => task.id !== Id));
      fetchTasks2();
    } catch (error) {
      console.error(`Error al eliminar la tarea con ID ${Id}:`, error);
    }
  };

  //************************************************

  useEffect(() => {
    fetchTasks2();  // Llama a fetchTasks al cargar el componente
  }, []); 


  //Obtener las tareas desde la api sin axios:
  const fetchTasks = async () => {
    const resp = await TaskServices.getTasks();
    console.log("RESPUESTA", resp);
    setTasks(resp.data); // Asumo que la data de las tareas está en resp.data
  };

  //Obtener un mensaje desde la api sin axios:
  const fetchSendMessage = async () => {
    const resp = await TaskServices.sendMessage("Hola cómo estás?");
    console.log("RESPUESTA", resp);
  };




  //contenido del cuerpo
  return (
    <>
      <main className="bg-[var(--color-green-sea-bg)] min-h-screen p-6 ">   {/* Se define el color  de fondo */}

        <div className="flex justify-center mb-4">  {/* Centra el contenido de la tarjeta Principal */}

          <div className="bg-purple-700 rounded-lg shadow-lg p-6 w-full max-w-md"> {/* Color y ancho de la caja */}
            <h3 className="text-white text-xl font-bold mb-4">To Do List</h3> {/* Titulo de la carta principal */}
            <div className="flex items-center mb-4"> {/* Posicion de los elementos dentro de la tarjeta principal */}

              {/* Diseño de input de add task  */}
              <input type="text" placeholder="Add New Todo"
                className="flex-grow text-white py-2 px-3 focus:outline-none focus:border-b-2 focus:border-purple-300 placeholder-white border-b border-purple-500 transition-all duration-200"
                value={newTaskTitle} onChange={handleInputChange}
              />

              {/* Boton para añadir tareas */}
              <button className="ml-4 bg-pink-300 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-pink-400 transition-colors duration-200"
                onClick={createTask2}>
                +
              </button>

            </div>

            <div>
              {/* Llamamos a las tareas para mostrarlas */}

              {loading ? (
                <p>Cargando...</p>
              ) : (
                <div>

                  {/* Mapeamos el estado 'tasks' para renderizar TaskCard */}
                  {tasks.map((item: any, idx: any) => (
                    <TaskCard key={idx} title={item.title} id={item.id} onDelete={deleteTask2} />
                  ))}

                </div>
              )}

            </div>
          </div>

        </div>

        {/*
        <button onClick={fetchTasks} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Obtener todas las tareas
        </button> 
        
        <button onClick={fetchSendMessage} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Enviar mensaje 'Hola'
        </button>
        */}

      </main>
    </>

  );
}

export default App;