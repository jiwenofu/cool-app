import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoItem from './assets/TodoItem'
import Form from './Form'

function App() {
  const [todos, setTodos] = useState([]);
  
  function addTodo(text) {
    console.log("add todo", text);
    createTodo(text);
  }

  function createTodo(text) {

  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Form submitHandler={addTodo} />
      <TodoItem text="Hello World!" id="hakka2211"/>
    </>
  )
}

export default App
