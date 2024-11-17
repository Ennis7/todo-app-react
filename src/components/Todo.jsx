import React from 'react'
import { NotePencil, Trash } from '@phosphor-icons/react'

// pulling the prop from the the TodoWrapper
const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    // displays the to-dos that have been added by pulling 
    <div className='Todo'>
    {/*adding an onEvent so that the task can be crossed off after completed. This is done by pulling from the prop toggleComplete*/}
      <p onClick={() => toggleComplete(task.id)} 
      className={`${task.completed ? 'completed': ""}`}
      >{task.task}</p>

    {/*Give the icons an onClick event to pull in the prop for delete and function for edit from the TodoWrapper*/}
      <div className="icon-container">
        <NotePencil size={20} weight='fill' onClick={() => editTodo(task.id)}/>
        <Trash size={20} weight='fill' onClick={() => deleteTodo(task.id)}/>
      </div>
    </div>
  )
}
//
export default Todo
