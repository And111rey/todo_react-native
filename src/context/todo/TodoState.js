import React, {useReducer, useContext} from "react"
import { TodoContext } from "./todoContext"
import { todoReducer } from "./todoReducer"
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "../types"
import { ScreanContext } from "../screen/screenContext"


export const  TodoState = ({ children }) => {

    const initialState = {
        todos: [
            {id:"1", title: "Learn react native"}
        ]
    }
    const { changeScreen } = useContext(ScreanContext)
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const addTodo = title => dispatch({ type: ADD_TODO, title})
    const removeTodo = id => {
        changeScreen(null)
        dispatch({ type: REMOVE_TODO, id: id })
    }
    const upDateTodo = (id, title) => {dispatch({ type: UPDATE_TODO, id: id, title: title})}




    return <TodoContext.Provider value={{
        todos: state.todos,
        addTodo,
        removeTodo,
        upDateTodo
    }} >{children}</TodoContext.Provider>
} 