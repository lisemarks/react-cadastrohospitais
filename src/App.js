import React, { useState } from 'react';
import './App.css';
import ListarHospitais from './components/ListarHospitais';
import InserirHospital from './components/InserirHospital';

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <InserirHospital addTodo={(todo) => {
        if (todo.task.trim().length > 0) {
          setTodos([...todos, todo]);
        }
      }} />
      <ListarHospitais todos={todos} updateTodos={(list) => { setTodos(list) }}></ListarHospitais>
    </div>
  );
}

export default App;