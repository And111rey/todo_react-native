import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
// ScrollView - используется для скроулинга по екрану телефона

import { useState } from "react" // импортируем {useState} для создания и работы со стейтами

import { AddTodo } from "./src/AddTodo"
import { NavBar } from "./src/NavBar"
import { Todo }  from "./src/Todo"
export default function App() {

  const [todos, setTodos] = useState([])


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



            // Stoped on creating Flatlist, lesson 22 next 23
  return (
    <View >  
      < NavBar title="ToDo App" />
      <View style={styles.container}>
        < AddTodo  onSubmit={addTodo}/>

        < FlatList
          keyExtractor={(item) => { return item.id.toString()}}  // спостоб передачи ключа в компоненту
          data={todos} // принимает весь стейт
          renderItem={( {item} ) => {return < Todo onRemove={removeTodo}  todo={item} />}} //отрисовываем и рендерим компоненту
        />

        {/* <View>
          {todos.map ((todo) => {
            return < Todo key={todo.id} todo={todo} />
          })}
        </View> */}
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