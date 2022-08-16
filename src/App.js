import './App.css';
import TodoList from './Componentes/TodoList';

function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <h1>To Do List</h1>
      </div>
      <div className='tareas-lista-ppal'>
        <h2>Mis tareas</h2>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
