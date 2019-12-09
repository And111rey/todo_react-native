import React, { useState } from "react"
import { StyleSheet, View, Text, Button, Dimensions } from "react-native"
// Button - отвечает за создание кнопки
import { THEME } from "../theme"
import { EditModal } from "../components/EditModal"
import { AppCard } from "../components/ui/AppCard"
// import { AppTextBolb } from "../components/ui/AppTextBold"
import { MaterialIcons, Foundation, Entypo } from "@expo/vector-icons"


export const TodoScreen = ({onRemove, goBack, todo, onSave }) => {

    const [modal, setModal] =  useState(false)
    
    const saveHandler = (title) => {
        onSave(todo.id, title)
        setModal(false)
    }
    
    return (
        <View>
            <EditModal 
                visible={modal} 
                onCancel={()=> { setModal(false) }} 
                value={todo.title}
                onSave={saveHandler}
            />
            <AppCard style={styles.card} >
                <AppCard>
                    <Text style={styles.title}>{todo.title}</Text>
                </AppCard>
                <Foundation.Button name="page-edit" onPress={()=> {setModal(true)} }></Foundation.Button>
            </AppCard>
            <AppCard>
                <View style={styles.buttons} > 
                    <View style={styles.btn}>
                        <Entypo.Button name="back" color={THEME.MAIN_COLOR} onPress={goBack}>Назад</Entypo.Button>
                    </View>
                    <View style={styles.btn}>
                        <MaterialIcons.Button name="delete" color={THEME.DANGER_COLOR} onPress={()=> {onRemove(todo.id)}}>Удалить</MaterialIcons.Button>
                    </View>
                </View>
            </AppCard>
        </View>
    )
}

const styles = StyleSheet.create({

    buttons: {
        flexDirection: "row", // чтоб  все елементы в теге View быи в строку
        justifyContent: "space-around" // "ососновать контент" с промежутком
    },
    card: {
        marginBottom: 20,
        padding: 15,
        color: "red"
    },
    btn: {
        width: "45%",  // ширина 30% от родительского компоненета
        // width: Dimensions.get("window").width / 3, // "Dimensions.get("window").width - выводит число ширины дисплея" 1/3 от ширины экрана
        // width: Dimensions.get("window").width > 700 ? 150: 100, // условие "если шрина экрана > 400  то ширна будет ...." 
        borderStyle: "solid",   // слить бордера в даном 
        borderRadius: 5,
        elevation: 10,
        shadowOffset: {
            width: 10,
            height: 10
        },
        padding: 1,

    },
    title: {
        fontSize: 20,
    }

})