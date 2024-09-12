import React, { useState } from 'react'

export const Form = ({createTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault()
        createTodo(value);
        setValue('');

    }
  return (
    <form className='mb-4 font-primary w-full text-center' onSubmit={handleSubmit}>
        <input type="text" className='outline-none
        bg-transparent border border-gray-500 p-4 w-[300px]
        text-white mb-8 rounded placeholder:text-gray-300' placeholder='Qué vamos a hacer hoy?'
        onChange={(e) => setValue(e.target.value)} value={value} required />
        <button className='bg-gray-700 border-none p-4
        text-white cursor-pointer rounded ml-2'> Agregar Tarea </button>
    </form>
  )
}

export default Form;
