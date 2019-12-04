import React from "react"
import { StyleSheet, View, Text, Button } from "react-native"
// Button - отвечает за создание кнопки
import { THEME } from "../theme"


export const TodoScreen = ({ goBack, todo }) => {
    return (
        <View style={styles.bck}>
            <Text>
                {todo.title}
            </Text>
            <View style={styles.buttons} > 
                <View style={styles.btn}>
                    <Button title="Назад" color={THEME.GREY_COLOR} onPress={goBack}/>
                </View>
                <View style={styles.btn}>
                    <Button title="Удалить" color={THEME.DANGER_COLOR} onPress={()=> {console.log("To remove")}}/>
                </View>
            </View>
            
        </View>
    )
}




const styles = StyleSheet.create({
    bck:{
        backgroundColor: "#E8E1DF"
    },
    buttons: {
        flexDirection: "row", // чтоб  все елементы в теге View быи в строку
        justifyContent: "space-around" // "ососновать контент" с промежутком
    },
    btn: {
        width: "50%",
        borderStyle: "solid",   // слить бордера в даном 
        borderWidth: 2,
        borderRadius: 5,


    }

})