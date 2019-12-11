import React, { useReducer }  from "react"
import { TodoContext } from "./todoContext"
import {todoReducer} from "./todoReducer"
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "./types"

export const TodoState = ({ children }) => {

    const initialState = {
        todos:[
            {id:"1", title: "Learn react native"}
        ]
    }

    const [state, dispatch] = useReducer(todoReducer, initialState) // первый параметр - "ФУНКЦИЯ РЕДЮСЕРА", второй параметр "НАЧАЛЬНОЕ СОСТОЯНИЕ"  и попадет в аргумет импортированого редусера,
    //диспатч будет изменять "СТЕЙТ" но чурез "РЕДЮСЕР"

    const addTodo = title => dispatch({type: ADD_TODO, title: title})
    const removeTodo = id => dispatch({type: REMOVE_TODO, id: id})
    const updateTodo = (id, title) => dispatch({type: UPDATE_TODO, id, title})

    return (
        <TodoContext.Provider // принимает парамет "value" через который передает ПРОПСЫ на все дочерные компоненты 
            value={{
                todos: state.todos, // "value" будет попадатьна все дочерние елементы
                addTodo,
                removeTodo,
                updateTodo
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}