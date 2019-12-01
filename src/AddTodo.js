import React from "react"
import { View, StyleSheet, TextInput, Button  } from "react-native"


export const AddTodo = () => {
    return(
        <View style={styles.block}>
            <TextInput  style={styles.input}/>
            <Button title="Добавить"/>
        </View>
    )
}


const styles  = StyleSheet.create({
    block: {
        flexDirection: "row",
        justifyContent: "space-between",  //  горизонтальное выравнивание
        alignItems: "center", 
    },
    input: {
        width: "80%",              // ширина елемента
        padding: 10,            //отступы внутри элемента
        borderStyle: "solid",   // слить бордера в даном 
        borderBottomWidth: 2,
        borderBottomColor: "#0B0C0C",
        backgroundColor: "white",

    }
})