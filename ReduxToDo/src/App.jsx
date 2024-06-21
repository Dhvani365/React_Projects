import { useState } from 'react';
import AddToDo from '../src/components/addTodo';
import ToDos from '../src/components/todos';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> To Do List (Using Redux) </h1>
      <AddToDo/>
      <ToDos/>
    </>
  )
}

export default App
