import React from 'react'
import { NotePencil, Trash } from '@phosphor-icons/react'

const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='Todo'>
      <p onClick={() => toggleComplete(task.id)} 
      className={`${task.completed ? 'completed': ""}`}
      >{task.task}</p>

      <div className="icon-container">
        <NotePencil size={20} weight='fill' onClick={() => editTodo(task.id)}/>
        <Trash size={20} weight='fill' onClick={() => deleteTodo(task.id)}/>
      </div>
    </div>
  )
}

export default Todo
