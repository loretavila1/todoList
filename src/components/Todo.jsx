import React, { useState } from 'react';
import { AiFillEdit } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs';



export const Todo = ({ task, deleteTodo, editTodo }) => {
    const [textDecorated, setTextDecorated] = useState('none');

    const handleChangeTextStyle = (e) => {
        e.preventDefault()
        setTextDecorated('line-through');
    }
    return (
        <div className='flex justify-between items-center bg-gray-600 text-white
    py-3 px-4 rounded-md mb-1 cursor-pointer'>
            <p className='font-primary' onClick={handleChangeTextStyle} style={{ textDecorationLine: textDecorated }} > {task.task} </p>
            <div className='flex items-center gap-x-4'>
                <AiFillEdit className='text-x1' onClick={() => editTodo(task.id)} />
                <BsFillTrashFill className='text-x1' onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    )
}

export default Todo;