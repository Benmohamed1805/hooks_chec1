import React, { useState } from 'react';
import './App.css';
import ToDoComp from './ToDoComp';

function App() {
  const [item, setItem] = useState('')
  const [todos, setTodos] = useState([])
  const handleInputValue = (e) => {
    e.preventDefault()
    setItem(e.target.value)
  }
  const handleToDo = (e) => {
    setTodos([...todos, { id: Math.random(), item: item }])
  }
  const removeItem = (id) => {
    setTodos(todos.filter(el => el.id !== id))
  }
  const EditItem =(id) => {
    let x=prompt('give me your new task here')
    setTodos (todos.map(el=>(el.id===id)?{id:id,item:x}:el))
  }
  return (<div>

    <input type='text' onChange={handleInputValue}/>
    <button onClick={handleToDo}>add</button>
    <ToDoComp todos={todos}  removeItem={removeItem} EditItem={EditItem}/>
  </div>
    
  );
}


export default App;
