import React, {useState} from 'react'

const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState("")
    // on form submit prevent default action and call editTodo state setter and reset value to an empty sting.
    const handleSubmit = e => {
        e.preventDefault();
        editTodo(value, task.id);
        setValue("")
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input 
        type="text" 
        className='todo-input'
        // mapping the state value to the input value.
        value={value} 
        placeholder='Update task'
        // on every key stroke update state value with current input value 
        onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}
// export component for use throughout the project.
export default EditTodoForm