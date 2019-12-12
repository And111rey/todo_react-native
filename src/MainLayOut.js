import React, {useState, useContext} from "react"
import {View, StyleSheet} from "react-native" 

import { NavBar } from "./components/NavBar"
import { MainScreen } from "./screens/Mainscreen"
import { TodoScreen } from "./screens/ToDoScreen"
import { TodoContext } from "./context/todo/todoContext"
import { ScreanContext } from "./context/screen/screenContext"

export const MainLauOut = () => {
    const {todos, addTodo, removeTodo, upDateTodo} = useContext(TodoContext)
    const {todoId, changeScreen} = useContext(ScreanContext)





  // const removeTodo = (id)=> {
  //   const element =  todos.find(t => t.id === id)
  //   Alert.alert(
  //     'Удаление елемента',
  //     `Вы уверены что хотите удалить "${element.title}" ?`,
  //     [
  //       {
  //         text: 'Отмена',
  //         style: 'cancel',
  //       },
  //       {text: 'Удалить', onPress: () => {
  //           setTodoid();
  //           setTodos((prev) => {          // с помощью хуков аргумент является состояние ,  его приводит сюда метод useState([])
  //           return prev.filter( (todo) => { return todo.id !== id})
  //         }) 
  //       }},
  //     ],
  //     {cancelable: false}, // чтоб алерт назакрывался от косания за границей алертного окна
  //   );
  // }



    // const upDateTodo = (id, title) => {
    //   setTodos(old => old.map(todo => {
    //     if (todo.id === id) {
    //       todo.title = title
    //     }
    //     return todo
    //   }))
    // }

    
  let content = (
    < MainScreen 
      todos={todos} 
      addTodo={addTodo} 
      removeTodo={removeTodo}  
      openTodo={changeScreen}
    />
  )
    
  if (todoId) {
    const selectedTodo = todos.find((todo) => {return todo.id === todoId})
    content = <TodoScreen 
      onSave={upDateTodo} 
      onRemove={removeTodo} 
      todo={selectedTodo} 
      goBack={()=> {changeScreen(null)}}
    />
  }
  

    return (
        <View >  
        < NavBar title="ToDo App" />
          <View style={styles.container}> 
              {content}
          </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
     paddingHorizontal: 30,
     paddingVertical: 20
    } 
  })