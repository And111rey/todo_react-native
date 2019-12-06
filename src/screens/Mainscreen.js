import React from "react"
import { StyleSheet, View, FlatList, Text , Image} from "react-native"

import { AddTodo } from "../components/AddTodo"
import { Todo } from "../components/Todo"


export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
    
    let content = (
        < FlatList
        keyExtractor={(item) => { return item.id.toString()}}  // спостоб передачи ключа в компоненту
        data={todos} // принимает весь стейт
        renderItem={( {item} ) => {return < Todo onRemove={removeTodo}  todo={item} onOpen={openTodo}/>}} //отрисовываем и рендерим компоненту
        />
    )
    // два спооба загрузки картинок разних форматов 
        if (todos.length === 0) {
            content = <View style={ styles.ingWrap } >
                    <Image style={styles.image} source={require("../../assets/images.png")}/> 
                    {/* <Image style={ styles.image } source={{
                        uri: "https://i.gifer.com/origin/fa/fa9e27a7534060df383ab54354fcead3_w200.gif"
                    }}/> */}
                </View>
            
        } 
    return (
        <View>
            < AddTodo  onSubmit={addTodo}/>
            { content }
        </View>
    )
}




const styles = StyleSheet.create({
    ingWrap: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        height: 300,
    },
    image: {
        width: "100%",
        height: "100%"
    }
})