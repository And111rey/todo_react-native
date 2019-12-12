import React, {useReducer} from "react"
import { TodoContext } from "./todoContext"
import { todoReducer } from "./todoReducer"
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "../types"


export const  TodoState = ({ children }) => {

    const initialState = {
        todos: [
            {id:"1", title: "Learn react native"}
        ]
    }
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const addTodo = title => dispatch({ type: ADD_TODO, title})
    const removeTodo = id => dispatch({ type: REMOVE_TODO, id: id })
    const upDateTodo = (id, title) => dispatch({ type: UPDATE_TODO, id: id, title: title})

    return <TodoContext.Provider value={{
        todos: state.todos,
        addTodo,
        removeTodo,
        upDateTodo
    }} >{children}</TodoContext.Provider>
} 