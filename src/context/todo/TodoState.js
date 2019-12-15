import React, {useReducer, useContext} from "react"
import { TodoContext } from "./todoContext"
import { todoReducer } from "./todoReducer"
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, SHOW_LOADER, HIDE_LOADER, SHOW_ERROR, CLEAR_ERROR, FETCH_TODOS } from "../types"
import { ScreanContext } from "../screen/screenContext"


export const  TodoState = ({ children }) => {

    const initialState = {
        todos: [],
        loading: false,
        error: null
    }
    const { changeScreen } = useContext(ScreanContext)
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const addTodo =  async title => {
        const  response = await fetch("https://rntodoapp-6de6e.firebaseio.com/todos.json", {
            method: "POST",
            headers: {"Content-Type": "aplication/json"},
            body: JSON.stringify({ title }) // приабразовует все в строку
        })
        const data = await response.json() //для того чтоб ответ сервера привращаем в джейсон
        console.log("ID ===>", data.name)
        dispatch({ type: ADD_TODO, title, id: data.name})    
    }
    const removeTodo = id => {
        changeScreen(null)
        dispatch({ type: REMOVE_TODO, id: id })
    }
    const fetchTodos = async() => {
        const response = await fetch("https://rntodoapp-6de6e.firebaseio.com/todos.json", {
            method: "GET",
            headers: {"Content-Type": "aplication/json"}
        })
        const data = await response.json()
        console.log("DATA from get ====>", data)
        const todos = Object.keys(data).map(key => ({ ...data[key], id: key }))
        
        setTimeout(()=>dispatch({ type: FETCH_TODOS, todos: todos }), 5000)
    }
    const upDateTodo = (id, title) => {dispatch({ type: UPDATE_TODO, id: id, title: title})}
    const showLoader = () => dispatch({ type: SHOW_LOADER })
    const hodeLoader = () => dispatch({type: HIDE_LOADER})
    const showError = (error) => dispatch({ type: SHOW_ERROR, error })
    const clearError = () => dispatch({ type: CLEAR_ERROR })


    return <TodoContext.Provider value={{
        todos: state.todos,
        // loading: state,loading,
        // error: state.error,
        addTodo,
        removeTodo,
        upDateTodo,
        fetchTodos
    }} >{children}</TodoContext.Provider>
} 