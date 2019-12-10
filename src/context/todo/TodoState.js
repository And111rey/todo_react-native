import React, { useReducer }  from "react"
import { TodoContext } from "./todoContext"
import {todoReducer} from "./todoReducer"

export const TodoState = ({ children }) => {

    const initialState = {
        todos:[
            {id:"1", title: "Learn react native"}
        ]
    }

    const [state, dispatch] = useReducer(todoReducer, initialState) // первый параметр - "ФУНКЦИЯ РЕДЮСЕРА", второй параметр "НАЧАЛЬНОЕ СОСТОЯНИЕ"  и попадет в аргумет импортированого редусера,
    //диспатч будет изменять "СТЕЙТ" но чурез "РЕДЮСЕР"

    return (
        <TodoContext.Provider // принимает парамет "value" через который передает ПРОПСЫ на все дочерные компоненты 
            value={{
                todos: state.todos, // "value" будет попадатьна все дочерние елементы
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}