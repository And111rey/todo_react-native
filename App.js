import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

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

  return (
    <ScrollView > 
      < NavBar title="ToDo App" />
      <View style={styles.container}>
        < AddTodo  onSubmit={addTodo}/>
        <View>
          {todos.map ((todo) => {
            return < Todo key={todo.id} todo={todo} />
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
   paddingHorizontal: 30,
   paddingVertical: 20
  }
   
})