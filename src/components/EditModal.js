import React, { useState } from "react"
import { View, StyleSheet, TextInput, Button, Modal, Alert} from "react-native"
import { THEME } from "../theme"

// Modal  --- для создания модального окна   

export const EditModal = ({ visible, onCancel, value,  onSave}) => {
    const [title, setTitle] = useState(value)

    const seveHandler = () => {
        
        if(title.trim().length < 3) {
            Alert.alert("Error", `Минимальни длинна 3 символа, а сейчас ${title.trim().length} символов`)
        } else {
            onSave(title)
        }
    }

    return (
        <Modal 
            visible ={ visible}       // если  TRUE  то отрисовует модальное окноб если FALSE
            animationType = "slide" // анимация при переключении  на новое модальное окно
            transparent = {false}    // если TRUE то модальное окно выскочит по верх экрана 
        >
            <View style={styles.wrap}>
                <TextInput 
                    style={styles.inp}
                    placeholder=" Введите название... "
                    autoCapotalize="none"
                    autoCorrect={false}
                    value = {title}
                    onChangeText={setTitle}
                />
                <Button style={styles.btn} color={THEME.DANGER_COLOR} title="Отменить" onPress={onCancel} />
                <Button  style={styles.btn} onPress={seveHandler} title="Сoхранить"/>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap: {
      flex: 1,                  // будет отрисован на вель экран
      justifyContent: "center",
      alignItems: "center"
    },
    inp: {
        padding: 5, 
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: "80%",
        // margin: 10,
    },
    btn: {
        width: "100%",
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-around",
    }
}) 