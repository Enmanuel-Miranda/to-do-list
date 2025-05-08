import { TrashIcon } from '@heroicons/react/24/outline'; /* Se necesita instalar npm install @heroicons/react */

interface Props {
  id: number;
  title: string;
  onDelete: (id: number) => void; // Prop opcional para la función de eliminar
}

export default function TaskCard(props: Props) {
  return (
    
    <div className="flex items-center justify-between bg-purple-600 text-white rounded-md shadow-sm p-4 mb-2 hover:bg-purple-500 transition-colors duration-200 cursor-pointer"> {/* centra el elemento dentro de la tarjeta */}
      
      {/* Titulo de la tarea */}
      <p className="text-lg">{props.title}</p>

      {/* Boton de eliminar de la tarea */}
      {props.onDelete && (
        <button onClick={() => props.onDelete(props.id)}> 
          <TrashIcon className="h-6 w-6 text-red-400 hover:text-red-500" />
        </button>
      )}

    </div>
    
  );
}