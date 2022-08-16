import React, {useState} from "react";
import '../hojas-de-estilo/TareaForm.css'
import {v4 as uuidv4} from 'uuid';


function TareaForm(props) {

const [input, setInput] = useState('');

const manejarCambio = e =>{
    setInput(e.target.value);
};

const manejarEnvio = e => {
    e.preventDefault();
    const tareaNueva= {id: uuidv4() , texto:input, completada: false};

    props.onSubmit(tareaNueva);
};

return(
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
        <input className="tarea-input" type="text" placeholder="Escribi una tarea a realizar" name="texto" 
        onChange={manejarCambio}>
        </input>
        <button className="tarea-boton">Agregar</button>
    </form>
);
};

export default TareaForm;