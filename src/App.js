import './App.css';
import React, { useState } from 'react';



function App() {
    // to store the todo data
    let [todo, setTodo] = useState("");
    let [list, setList] = useState([]);


    const addTodo = () => {
        setList([...list, todo]);
        setTodo("");
        console.log(todo);
        console.log(list);
    }

    const delTodo = (tsk) => {
        /*  I found in my notebook where I recorded usage of different array methods, 
            their filter() is a method which can return an array based on condition 
            provided for original array.Let's use it here gain. */
        const newList = list.filter((ele) => {
            return ele !== tsk;
        })
        setList(newList);
    }

    return (
        <div className='App'>
            <h2>TODO-APP</h2>
            <div className='add-todo'>
                <input
                    className='taskInp'
                    type='text'
                    value={todo}
                    placeholder='Create a task'
                    onChange={(e) => {
                        setTodo(e.target.value)
                    }}
                />
                &nbsp;
                <button className='add-btn' onClick={addTodo}>Add</button>

            </div>
            <div className='task-box'>
                {list.length > 0 ? (
                    <ul className="taskList">
                        {
                            list.map((item, index) => (
                                <div className='task'>
                                    <li key={index}>{item}</li>

                                    &nbsp;
                                    <button className='del-btn' onClick={() => delTodo(item)}>Delete</button>
                                </div>
                            ))
                        }
                    </ul>
                ) : (
                    <div>
                        <h4>No task is added</h4>
                    </div>
                )
                }
            </div>
        </div>
    );
}

export default App;