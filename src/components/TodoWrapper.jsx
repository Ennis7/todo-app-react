import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
uuidv4();

// TodoWrapper is the parent component 
const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    // function that calls the todos state setter and adds new todo to the list of current todos.
    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo,
            completed: false, isEditing: false}
        ])
    }
    // function that calls the todos state setter and marks the currently checked todo as complete based on the todo id.
    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ?
            {...todo, completed: !todo.completed} : todo
        ))
    }
    // function that calls the todos state setter and deletes the selected todo based on the todo id.
    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    // function that calls the todos state setter and allows you to set the selected todo in edit mode.
    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, isEditing: !todo.isEditing} : todo
        ))
    }
    // function that calls the todos state setter and allows you to edit the selected todo task name.
    const editTask = (task, id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo
        ))
    }

  return (
    //pulling in and displaying the to-dos added to the list from the todo.jsx 
        <div className='TodoWrapper'>
            <h1>List:</h1>
        <TodoForm addTodo={addTodo}/>
        {/* map over todos and use a ternary to either render the EditTodoForm component or the Todo component */}
        {todos?.map((todo, index) => (
            todo.isEditing ? (
            <EditTodoForm  editTodo={editTask} task={todo}/> 
        ) : (
            <Todo task={todo} key={index}
            // actions that can be taken on the list items. (edit, delete, and marked completed
            toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
        )))}
        </div>
    )
}
//
export default TodoWrapper