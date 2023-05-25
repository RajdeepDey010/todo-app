import './App.css';
import React,{useState} from 'react';



function App(){
    // to store the todo data
    let [todo, setTodo] = useState("");
    let [list, setList] = useState([]);
    

    const addTodo = () => {
        
        setList([...list,todo]);
        setTodo("");
        console.log(todo);
        console.log(list);
        alert("Task: "+todo);
    }
    return(
        <div className='App'>
            <h2>TODO-APP</h2>

            <div className='task-box'>
                <input 
                    className='task' 
                    type='text' 
                    value={todo}
                    placeholder='Create a task' 
                    onChange={(e) => {
                        setTodo(e.target.value)
                    }}
                />
                &nbsp;
                <button className='add-task' onClick={addTodo}>Add</button>
            </div>
        </div>
    );
}

export default App;