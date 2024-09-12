import React, {useState} from 'react'
import Form from './Form';
import {v4 as uuidv4} from 'uuid';
import Todo from './Todo';
import EditTodo from './EditTodo';
uuidv4()

export const TodoApp = () => {
  const [todoValue, setTodo] = useState([]);

  const createTodo = todo => {
    setTodo([...todoValue, {id: uuidv4(), task: todo, isEditing: false}])
  }

  const deleteTodo = id => {
    setTodo(todoValue.filter(todo => todo.id !== id))
  }

  const editTodo = id => (
    setTodo(todoValue.map(todo => todo.id === id ? {...todo, isEditing:!todo.isEditing}: todo))
  )

  const editTask = (task, id) => {
    setTodo(todoValue.map(todo => todo.id === id ? {...todo,
      task, isEditing: !todo.isEditing} : todo))
  }
  return (
    <>
    <div className='container bg-gray-800 mt-20 p-8 rounded-md'>
    <h1 className='text-4xl mb-4 text-white text-center'>ToDo List</h1>
        <Form createTodo = {createTodo} />

        {
          todoValue.map((todo, id) => (
            todo.isEditing ? (
              <EditTodo key={id} editTodo={editTask} task={todo}/>
            ) : (
              <Todo task={todo} key={id} deleteTodo={deleteTodo} 
              editTodo={editTodo}/>
            )
          ))
        }
    </div>
    </>
  )
}

export default TodoApp;
