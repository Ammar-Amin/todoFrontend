import { useState } from 'react'
import { addTodo, updateTodo } from '../utils/handleApi'

const InputForm = ({ details, setDetails, setTodo, update, setUpdate, todoId }) => {

    function change(e) {
        let { name, value } = e.target
        // console.log(name, value)
        setDetails((prev) => ({ ...prev, [name]: value }))
    }

    function submit(e) {
        // console.log("clicked")
        e.preventDefault()
        if (update) {
            updateTodo(todoId, details, setTodo)
            setUpdate(false)
        } else {
            addTodo(details, setTodo)
        }
        setDetails({
            text: '',
            priority: `${details.priority}`,
            dueDate: '',
        })
    }

    return (
        <form onSubmit={submit}
            className='w-[90%] sm:w-[500px] mx-auto p-3 bg-slate-700 rounded-lg flex flex-col justify-center gap-3'>
            <input
                name='text'
                type='text'
                value={details.text}
                onChange={change}
                className=' py-1 px-3 text-black border-none outline-none rounded-md cursor-pointer placeholder:text-slate-700' placeholder="Enter Your Todos..." />
            <div className='flex gap-2 flex-col sm:flex-row justify-between items-center'>
                <div className='flex gap-2'>
                    <label htmlFor='priority'>Priority :</label>
                    <select name='priority'
                        className='text-black px-2 py-[2px] rounded-md outline-none cursor-pointer'
                        onChange={change}
                        defaultValue={details.priority}
                    >
                        <option value='Low'>Low</option>
                        <option value='Medium'>Medium</option>
                        <option value='High'>High</option>
                    </select>
                </div>
                <div className='flex gap-2'>
                    <label htmlFor='dueDate'>Due Date :</label>
                    <input
                        name='dueDate'
                        type='date'
                        value={details.dueDate}
                        onChange={change}
                        className='text-black px-2 py-[2px] rounded-md outline-none cursor-pointer' placeholder='due date' />
                </div>
            </div>
            <div className='mt-3 mx-auto'>
                {
                    details.text !== ''
                        ? <input type='submit' className='px-6 py-2 font-bold bg-green-600 hover:bg-green-700 rounded-lg cursor-pointer' value={update ? 'Update Todo' : 'Add Todo'} />
                        : <p className='text-xl text-red-400'>Waiting for your Todo's...</p>
                }
            </div>
        </form>
    )
}

export default InputForm
