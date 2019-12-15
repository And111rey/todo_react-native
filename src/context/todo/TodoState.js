import React, {useReducer, useContext} from "react"
import {Alert} from "react-native"
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
            method: "POST",                     // метод для отправики данных на сервер 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ title }) // приабразовует все в строку
        })
        const data = await response.json() //для того чтоб ответ сервера привращаем в джейсон
        console.log("ID ===>", data.name)
        dispatch({ type: ADD_TODO, title, id: data.name})    
    }
    const removeTodo =  (id) => {
        const todo = state.todos.find(t=> t.id === id)
        Alert.alert(
            "Deleting element",
            `Вы увкрены что хотите удалить элемент "${todo.title}" ?`,
            [
                {
                    text: "ОТМЕНА",
                    style: "cancel"
                },
                {
                    text: "Удалиь",
                    style: "destructive",
                    onPress: async() => {
                        changeScreen(null)
                        await fetch (`https://rntodoapp-6de6e.firebaseio.com/todos/${id}.json`, {
                            method: "DELETE",
                            header: {"Content-Type": "application/json"},
                        })
                        dispatch({ type: REMOVE_TODO, id: id })
                    }
                }
            ],
            {canselable: false}
        )
       
    }


    const fetchTodos = async() => {
        // showLoader()
        try{
            const response = await fetch("https://rntodoapp-6de6e.firebaseio.com/todos.json", {
                method: "GET", // метод для получения днных из сервера
                headers: {"Content-Type": "application/json"}
            })
            const data = await response.json()
            // console.log("DATA from get ====>", data)
            const todos = Object.keys(data).map(key => ({ ...data[key], id: key }))
            
            dispatch({ type: FETCH_TODOS, todos: todos })
        } catch (e) {
            console.log("Что-то пошло не так .....")
            console.log("Ошибка --->>>", e)    
        } finally {
            console.log("Испытываем блок FINALLY......")
        }   
    }


    const upDateTodo = async (id, title) => {

        try{
            await fetch(`https://rntodoapp-6de6e.firebaseio.com/todos/${id}.json`,{
                method: "PATCH",                    // метод для обновления данных на серверк
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ title })
            })
            dispatch({ type: UPDATE_TODO, id, title})
        } catch(e){
            console.log("Что-то пошло не так при обновлении элемента....")
        }

    }
    const showLoader = () => dispatch({ type: SHOW_LOADER })
    const hideLoader = () => dispatch({type: HIDE_LOADER})
    const showError = (error) => dispatch({ type: SHOW_ERROR, error })
    const clearError = () => dispatch({ type: CLEAR_ERROR })


    return <TodoContext.Provider value={{
        todos: state.todos,
        // loading: state,loading,
        // error: state.error,
        addTodo,
        removeTodo,
        upDateTodo,
        fetchTodos,
        
    }} >{children}</TodoContext.Provider>
} 