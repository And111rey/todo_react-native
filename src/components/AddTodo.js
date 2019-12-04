import React, {useState} from "react"
import { View, StyleSheet, TextInput, Button, Alert  } from "react-native"
 // Alert - стилизтроапний вывод текста , взависимости от гаджета 
    //   autoCapitalize -  свойство  <TextInput>,  отвечает за упрвление заглавними буквами
export const AddTodo = ({  onSubmit }) => {

    const [value, setValue] = useState('') 

    const pressHandler = () => {
        if (value.trim()) {        // ( trim() - уберает со стороки все пробелыб можно и без него)  если значение пришедшее из <TextInput > валидное 
            onSubmit(value) // закидываем в переменную значение из <TextInput >
            setValue("")    // очищаем стейт, делаем пустую строку 
        } else {
            // err
            Alert.alert("Введите что-то")
        }

    }

    return(
        <View style={styles.block}>
            <TextInput 
                style={styles.input}
                onChangeText={text => setValue(text)} //берем значение из input
                value={value}
                placeholder="Введите название дела... "
                autoCorrect={false}  // отключение и всключение попровки при вводе, по умолчанию оно "true" 
                // keyboardType="number-pad" // атрибут что управляет формой клавиатуры
                />
            <Button title="Добавить" onPress={pressHandler} />
        </View>
    )
}


const styles  = StyleSheet.create({
    block: {
        flexDirection: "row",
        justifyContent: "space-between",  //  горизонтальное выравнивание
        alignItems: "center", 
        marginBottom: 15
    },
    input: {
        width: "80%",              // ширина елемента
        padding: 10,            //отступы внутри элемента
        borderStyle: "solid",   // слить бордера в даном 
        borderBottomWidth: 2,
        borderBottomColor: "#0B0C0C",


    }
})