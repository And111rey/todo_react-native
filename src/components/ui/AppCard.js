
import React from "react"
import { StyleSheet, View} from "react-native"


export const AppCard = (props) => {
    return (
        <View style={{...styles.default, ...props.style}}>
            {props.children} 
        </View>
    )
}
// чрез  СПРЕД оператор style={{...styles.default, ...props.style}}> подключаем обьект со стилами 
// props.style это те стили которые приходят из родительского компонента

// {props.children} позволяет виводить контент кторый обернутый в тег с даным компонентом  < AppCard >

const styles = StyleSheet.create({
    default: {
        // borderWidth: 2,
        // borderColor: "green",
        padding: 20,            // внутринние отступи но 20
        justifyContent: "space-between", // пространство межлу элементами
        alignItems: "center", // выровнять по центру
        shadowColor: "#3BB5E3",      //цвет тени
        shadowRadius: 2,          // радиус тени
        shadowOpacity: 0.3, // прозрачность тени
        shadowOffset:{          // смещение тени
            width:2,
            height: 2
        },
        elevation: 5, // ТЕНЬ ПО ОБЬЕМУ  свойство для подключения теней на АНДРОИДЕ
        backgroundColor: "#B8E5F7",
        borderRadius: 10,
    }
})