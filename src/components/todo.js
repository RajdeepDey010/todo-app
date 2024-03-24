import React, { useState } from 'react'
import '../styles/todo.css'

const Todo = () => {
  const [task,setTask] = useState("")
  const [items,setItems] = useState([])

  const addTask = (e)=>{
    setTask(e.target.value);
  }

  const taskList = ()=>{
    setItems([...items, task])
    document.getElementById('taskBox').value = "";
    console.log(items)
  }

  const delTask = (index)=>{
    let res = [...items]
    res.splice(index,1)
    setItems(res);
  }

  return (
      <div className='parent'>
        <div className='child'>  
        <br />
        <h1>Todo App</h1>
        <br />
          <input 
          type="text" 
          id='taskBox'
          placeholder='enter a task'
          onChange={(event)=>{addTask(event)}}
          />
          <button onClick={taskList}>
            Add
          </button>

          <ul>
            {
              items.map((tmp,index) =>{
                return (
                <li key={index}>
                  {tmp}
                  <button onClick={()=> delTask(index)}>
                    Remove
                  </button>
                </li>)
              })  
            }
          </ul>
        </div>
      </div>

  )
}

export default Todo
