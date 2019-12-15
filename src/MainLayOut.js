import React, {useState, useContext} from "react"
import {View, StyleSheet} from "react-native" 

import { NavBar } from "./components/NavBar"
import { MainScreen } from "./screens/Mainscreen"
import { TodoScreen } from "./screens/ToDoScreen"
import { TodoContext } from "./context/todo/todoContext"
import { ScreanContext } from "./context/screen/screenContext"

export const MainLauOut = () => {
    // const {todos, addTodo, removeTodo, upDateTodo} = useContext(TodoContext)
    const {todoId} = useContext(ScreanContext)

    return (
        <View style={{flex: 1}}>  
        < NavBar title="ToDo App" />
          <View style={styles.container}> 
              {todoId? <TodoScreen />: <MainScreen />}
          </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
     flex:1,
     paddingHorizontal: 30,
     paddingVertical: 20
    } 
  })