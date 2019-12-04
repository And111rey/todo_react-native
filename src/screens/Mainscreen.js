import React from "react"
import { StyleSheet, View, FlatList } from "react-native"

import { AddTodo } from "../components/AddTodo"
import { Todo } from "../components/Todo"


export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
    return (
        <View>
            < AddTodo  onSubmit={addTodo}/>

            < FlatList
                keyExtractor={(item) => { return item.id.toString()}}  // спостоб передачи ключа в компоненту
                data={todos} // принимает весь стейт
                renderItem={( {item} ) => {return < Todo onRemove={removeTodo}  todo={item} onOpen={openTodo}/>}} //отрисовываем и рендерим компоненту
            />
        </View>
    )
}




const styles = StyleSheet.create({})