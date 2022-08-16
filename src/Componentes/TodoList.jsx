import React, {useState} from "react";  
import TareaForm from './TareaForm';
import '../hojas-de-estilo/TodoList.css'
import Tarea from './tarea';

function TodoList(){
 const [tareas, setTareas] = useState([]);

 const agregarTarea = tarea =>{
    if(tarea.texto.trim()){
        tarea.texto = tarea.texto.trim();
        const tareasActualizadas = [tarea, ...tareas];
        setTareas(tareasActualizadas);
    }else{
        alert('Ingresa info');
    }
 };

 const eliminarTarea = id =>{
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
 };

 const completarTarea = id =>{
    const tareasActualizadas = tareas.map(tarea => {
        if(tarea.id === id){
            tarea.completada = !tarea.completada;
        }
        return tarea;
    });
    setTareas(tareasActualizadas);
};

    return(
        <>
            <TareaForm onSubmit={agregarTarea} />
            <div className="tareas-lista-contenedor">
                {
                 tareas.map((tarea)=> 
                 <Tarea key={tarea.id} id={tarea.id} texto={tarea.texto} completada={tarea.completada} 
                 eliminarTarea={eliminarTarea} completarTarea={completarTarea}
                 />)
                }
            </div>
        </>
    );
}

export default TodoList;