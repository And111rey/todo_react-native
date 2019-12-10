import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
// ScrollView - используется для скроулинга по екрану телефона

import { useState } from "react" // импортируем {useState} для создания и работы со стейтами

// import { MainScreen } from "./src/screens/Mainscreen"
// import { TodoScreen } from "./src/screens/ToDoScreen"
// import { NavBar } from "./src/components/NavBar"
import { MainLayout } from "./src/MainLayout"
import { TodoState } from "./src/context/todo/TodoState"

import * as Font from "expo-font" // библиотека с помощью котой можно подгрузить данные шрифти
import { AppLoading } from "expo"


async function loadAplication() { // фсинхронная функция что подключает шрифты
    await Font.loadAsync({
        "robora-regular": require("./assets/font/Roboto-Regular.ttf"), // "require" для подключения локальных файлов
        "robota-bold": require("./assets/font/Roboto-Bold.ttf")
    })
}


export default function App() {

  const [isReady, setIsReady] = useState(false)

  // const [todoId,setTodoid ] = useState(null)
  // const [todos, setTodos] = useState([
  //   {id:"1", title: "Learn react native"},
  //   // {id:"2", title: "Learn how to deployapp"},
  // ])

  if (!isReady) {
    return <AppLoading  
      startAsync={loadAplication} 
      onError={ err => (console.log(err))}
      onFinish={()=>setIsReady(true)}
      />
  }


  // const addTodo = (title) => {
  //   setTodos((prev) => {
  //     return [...prev, {id: Date.now().toString(), // форматируем в строку
  //       title: title}]
  //   })
  // }

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

  // let content = (
  //   < MainScreen 
  //     todos={todos} 
  //     addTodo={addTodo} 
  //     removeTodo={removeTodo}  
  //     openTodo={(id)=>{ setTodoid(id)}}
  //   />
  // )

  //   const upDateTodo = (id, title) => {
  //     setTodos(old => old.map(todo => {
  //       if (todo.id === id) {
  //         todo.title = title
  //       }
  //       return todo
  //     }))
  //   }

 
  // if (todoId) {
  //   const selectedTodo = todos.find((todo) => {return todo.id === todoId})
  //   content = < TodoScreen onSave={upDateTodo} onRemove={removeTodo}  todo={selectedTodo} goBack={()=> {setTodoid(null)}} />
  // }

  return (
    // <View >  
    //   < NavBar title="ToDo App" />
    //     <View style={styles.container}> 
    //         {content}
    //     </View>
    // </View>
      <TodoState>
        <MainLayout/>
      </TodoState>
  );
}

// const styles = StyleSheet.create({
//   container: {
//    paddingHorizontal: 30,
//    paddingVertical: 20
//   }
   
// })