import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    const handleSubmit = e => {
        //prevent default action
        e.preventDefault();

        addTodo(value);
        //clears form after submission
        setValue("")
    }
  return (
    //This is where the task are entered to be added to the list
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input 
        type="text" 
        className='todo-input'
        //pulling the value from State
        value={value} 
        placeholder='enter task' 
        //
        onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
//
export default TodoForm