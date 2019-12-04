import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
// ScrollView - используется для скроулинга по екрану телефона

import { useState } from "react" // импортируем {useState} для создания и работы со стейтами

import { MainScreen } from "./src/screens/Mainscreen"
import { TodoScreen } from "./src/screens/ToDoScreen"
import { NavBar } from "./src/components/NavBar"

///////////////////////////////////////////////////////////////////////////////////////////////////////
// ............................lesson 28
export default function App() {

  const [todoId,setTodoid ] = useState("2")
  const [todos, setTodos] = useState([
    {id:"1", title: "Learn react native"},
    {id:"2", title: "Learn how to deployapp"},
  ])


  const addTodo = (title) => {
    setTodos((prev) => {
      return [...prev, {id: Date.now().toString(), // форматируем в строку
        title: title}]
    })
  }

  const removeTodo = (id)=> {
    setTodos((prev) => {          // с помощью хуков аргумент является состояние ,  его приводит сюда метод useState([])
      return prev.filter( (todo) => { return todo.id !== id})
    }) 
  }

  let content = (
    < MainScreen 
      todos={todos}
      addTodo={addTodo} 
      removeTodo={removeTodo} 
      openTodo={(id)=>{ setTodoid(id)}}
    />
  )



  if (todoId) {
    const selectedTodo = todos.find((todo) => {return todo.id === todoId})
    content = < TodoScreen todo={selectedTodo} goBack={()=> {setTodoid(null)}} />
  }

  return (
    <View >  
      < NavBar title="ToDo App" />
        <View style={styles.container}> 
            {content}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   paddingHorizontal: 30,
   paddingVertical: 20
  }
   
})