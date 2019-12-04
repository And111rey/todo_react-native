import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { THEME } from "../theme"

export  const  NavBar = ({title}) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}> {title}</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: "center",                   // выровнять по  горизонтали
        justifyContent: "flex-end",             // выравниваем по вертикали     
        backgroundColor: THEME.MAIN_COLOR,
        paddingBottom: 10,                      // отступ с низу
    },
    text: {
        color: "white",
        fontSize: 20
    }
     
  });
  