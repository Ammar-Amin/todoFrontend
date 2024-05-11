import { useEffect, useState } from 'react'
import InputForm from './components/InputForm'
import Todo from './components/Todo'
import { getAllTodo, deleteTodo } from './utils/handleApi'

function App() {
  const [details, setDetails] = useState({
    text: '',
    priority: 'Low',
    dueDate: '',
  })
  let [todo, setTodo] = useState([])
  let [update, setUpdate] = useState(false)
  let [todoId, setTodoId] = useState('')

  useEffect(() => {
    getAllTodo(setTodo)
  }, [])

  function updateMode(_id, data) {
    setUpdate(true)
    setTodoId(_id)
    setDetails({
      text: data.text,
      priority: data.priority,
      dueDate: data.dueDate,
      toggleCompleted: data.toggleCompleted
    })
  }

  return (
    <div className='p-4 w-full min-h-screen bg-slate-800 text-white'>
      <h1 className='my-4 text-3xl text-center font-bold tracking-wide'>Todo App</h1>
      {/* todo form  */}
      <InputForm
        details={details}
        setDetails={setDetails}
        setTodo={setTodo}
        update={update}
        setUpdate={setUpdate}
        todoId={todoId} />
      {/* todo list  */}
      <div className='my-5'>
        {
          todo.map((item) => {
            return <Todo
              key={item._id}
              data={item}
              updateMode={() => updateMode(item._id, item)}
              deleteMode={() => deleteTodo(item._id, setTodo)} />
          })
        }
      </div>
    </div>
  )
}

export default App
