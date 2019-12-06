import React, { useState } from "react"
import { StyleSheet, View, Text, Button } from "react-native"
// Button - отвечает за создание кнопки
import { THEME } from "../theme"
import { EditModal } from "../components/EditModal"
import { AppCard } from "../components/ui/AppCard"


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
                <Button title="Редактировать" onPress={()=> {setModal(true)} }/>
            </AppCard>
            <AppCard>
                <View style={styles.buttons} > 
                    <View style={styles.btn}>
                        <Button title="Назад" color={THEME.GREY_COLOR} onPress={goBack}/>
                    </View>
                    <View style={styles.btn}>
                        <Button title="Удалить" color={THEME.DANGER_COLOR} onPress={()=> {onRemove(todo.id)}}/>
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
        width: "50%",
        borderStyle: "solid",   // слить бордера в даном 
        borderRadius: 5,
        elevation: 10,
        // shadowColor: "#F7C2B8",
        // shadowRadius: 5,
        // shadowOpacity: 0.9,
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