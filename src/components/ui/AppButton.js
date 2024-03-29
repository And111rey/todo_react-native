import React from "react"
import {StyleSheet, View, TouchableOpacity} from "react-native"

// TouchableOpacity -->> необходим для обратотки кликов
import { AppTextBold } from "./AppTextBold"
import { THEME } from "../../theme"

export const AppButton = ({children, onPress,color=THEME.MAIN_COLOR }) => {
    return(
        <TouchableOpacity onPress={onPress} >
            <View style={{...styles.button, backgroundColor: color}}>
                <Text>{children}</Text> 
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
  button: {
      paddingHorizontal:20,
      paddingVertical: 10,
      borderRadius: 5,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"

  }  
})