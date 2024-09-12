import React, { useState } from 'react'

export const EditTodo = ({editTodo, task}) => {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault()
        editTodo(value, task.id);
        setValue('', value);
    }
  return (
    <form className='mt-4 mb-4 font-primary w-full text-center' onSubmit={handleSubmit}>
        <input type="text" className='outline-none
        bg-transparent border border-gray-500 p-4 w-[300px]
        text-white mb-8 rounded placeholder:text-gray-300' placeholder='Actualizar tarea'
        onChange={(e) => setValue(e.target.value)} value={value} />
        <button className='bg-gray-700 border-none p-2
        text-white cursor-pointer rounded ml-2'> Editar Tarea </button>
    </form>
  )
}

export default EditTodo;

