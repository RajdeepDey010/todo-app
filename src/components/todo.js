import React, { useState } from 'react'
import '../styles/todo.css'
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

function Todo() {
  const [todo, setTodo] = useState([])
  const [msg, setMsg] = useState("")

  const [flg, setFlg] = useState(null)
  const [txt, setTxt] = useState("")

  const handleSubmit = () => {
    if (msg !== "") {
      let tmp = [...todo]

      tmp.push({
        id: new Date().getTime(),
        content: msg
      })
      setTodo(tmp)
      setMsg("")
    }
    else {
      alert("Please add your task.Focus on hunger!")
    }

  }

  const handleEdit = (id) => {
    if (txt !== "") {
      const tmp = [...todo].map((items) => {
        if (items.id === id) {
          items.content = txt
        }
        return items;
      })

      setTodo(tmp)
      setFlg(null)
      setTxt("")
    }
    else { alert("Please add your task.Focus on hunger!") }
  }

  const handleDel = (id) => {
    const tmp = [...todo].filter((val) => val.id !== id)
    setTodo(tmp)
  }

  return (
    <div className="main">
      <Typography
        variant='display1'
        align='center'
        gutterBottom>
        ToDO App in ReactJS
      </Typography>

      <form onSubmit={(e) => {

        e.preventDefault()
        handleSubmit();
        console.log(todo);
      }}>

        <TextField
          id="standard-basic" variant="standard"
          type="text"
          value={msg}
          placeholder='Enter a task'
          className='inputBox'
          onChange={e => setMsg(e.target.value)}
        />
        <Button
          type='submit'
          className='addBtn'
          variant='contained'
        >
          add
        </Button>
      </form>

      <b>My Tasks</b>

      <Paper elevation={3}>
      <div className="todo-view">
        {
          todo.map((tmp) => {
            return (
              <div className="todo-card" key={tmp.id}>
                {
                  flg === tmp.id ? (
                    <>
                      <TextField
                        id="standard-basic" variant="standard"
                        type="text"
                        className='editBox'
                        placeholder='Enter a task'
                        value={txt}
                        onChange={(e) => setTxt(e.target.value)}
                      />

                      <Button
                        className='updateBtn'
                        onClick={() => handleEdit(tmp.id)}
                        variant='contained'
                      >
                        update
                      </Button>
                    </>

                  ) : (
                    <>
                      <span>{tmp.content}</span>

                       <DeleteIcon
                        className='delBtn'
                        color='red'
                        onClick={() => handleDel(tmp.id)}
                       />

                      <Button
                        className='editBtn'
                        onClick={(e) => setFlg(tmp.id)}
                        variant='contained'
                      >
                        edit
                      </Button>
                    </>
                  )
                }


              </div>
            )
          })
        }
      </div>
      </Paper>

      
    </div>
  )
}

export default Todo
