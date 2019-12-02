import React from "react"
import { Text, View, StyleSheet, TouchableOpacity } from "react-native"

//TouchableOpacity - при нажатии на элемент он готов к обратотке отвечает на прикосновения


export const Todo = ({ todo, onRemove }) => {
    return (
        <TouchableOpacity       // данный тег обрабатыве косание 
            activeOpacity={0.2} // параиетр прозначности при касании
            onPress={() => { console.log ("Press", todo.id)}}   // событие
            onLongPress={() => { onRemove(todo.id) }}    // событие "Долгое нажатие"
        >
            <View style={styles.todo}>
                <Text>{todo.title} </Text>
            </View>
        </TouchableOpacity>
    )
} 

const styles = StyleSheet.create({
    todo: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 5,
        marginBottom: 7
    }
})