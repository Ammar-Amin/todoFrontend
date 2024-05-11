import React, { useState } from 'react'
import { BiEdit } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'

function Todo({ data, updateMode, deleteMode }) {
    let { text, priority, dueDate, } = data
    let [toggle, setToggle] = useState(false)
    return (
        <div className={"w-[90%] sm:w-[500px] p-3 mx-auto my-2 " + (toggle ? 'bg-green-500' : 'bg-zinc-600')} >
            <div className='flex justify-between text-slate-200'>
                <div className={"center relative inline-block select-none whitespace-nowrap rounded-full px-3.5 py-1.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white "
                    + (priority == 'Low' ? "bg-teal-500" : priority == "High" ? 'bg-red-400' : 'bg-blue-400')}>
                    {/* <div className="absolute top-2/4 left-1 h-5 w-5 -translate-y-2/4">
                        <img
                            alt="tania andrew"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                            className="relative inline-block h-5 w-5 translate-x-px translate-y-px rounded-full object-cover object-center"
                        />
                    </div> */}
                    <div className="mx-auto mt-px">
                        <p className="block font-sans text-sm font-medium capitalize leading-none text-white antialiased">
                            Priority : {priority}
                        </p>
                    </div>
                </div>
                {
                    dueDate !== undefined && dueDate !== null && dueDate !== ''
                        ? <span>Due : {dueDate}</span>
                        : null
                }
            </div>
            <div className='py-3 flex justify-between items-center gap-1'>
                <div className="flex flex-1">
                    <span className={`w-3 h-3 px-1 mt-[7px] mr-2 border-[1px] cursor-pointer border-black rounded-full ${toggle ? 'bg-green-600' : 'bg-white'}`} onClick={() => setToggle(!toggle)}></span>
                    <h1 className={`font-semibold text-wrap ${toggle ? 'line-through' : ''}`}>{text}</h1>
                </div>
                <div className='flex gap-3'>
                    <BiEdit
                        className='text-xl cursor-pointer'
                        onClick={updateMode} />
                    <AiFillDelete
                        className='text-xl cursor-pointer'
                        onClick={deleteMode} />
                </div>
            </div>
        </div>
    )
}

export default Todo
