import axios from 'axios'

const baseUrl = 'https://todobackend-2pd4.onrender.com'

const getAllTodo = (setTodo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            // console.log("data---- ", data)
            setTodo(data)
        })
}

const addTodo = (details, setTodo) => {
    let { text, priority, dueDate } = details
    axios
        .post(`${baseUrl}/save`, { text, priority, dueDate })
        .then((data) => {
            // console.log("data---- ", data)
            getAllTodo(setTodo)
        })
        .catch(err => console.log('Error : ', err))
}

const updateTodo = (todoId, details, setTodo) => {
    let { text, priority, dueDate } = details
    axios
        .post(`${baseUrl}/update`, { _id: todoId, text, priority, dueDate })
        .then((data) => {
            // console.log("data---- ", data)
            getAllTodo(setTodo)
        })
        .catch(err => console.log('Error : ', err))
}

const deleteTodo = (_id, setTodo) => {
    axios
        .post(`${baseUrl}/delete`, { _id })
        .then((data) => {
            // console.log("data---- ", data)
            getAllTodo(setTodo)
        })
        .catch(err => console.log('Error : ', err))
}

export { getAllTodo, addTodo, updateTodo, deleteTodo }