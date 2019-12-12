import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
// ScrollView - используется для скроулинга по екрану телефона

import { useState } from "react" // импортируем {useState} для создания и работы со стейтами


import * as Font from "expo-font" // библиотека с помощью котой можно подгрузить данные шрифти
import { AppLoading } from "expo"
import { MainLauOut } from './src/MainLayOut';
import { TodoState } from "./src/context/todo/TodoState"


async function loadAplication() { // фсинхронная функция что подключает шрифты
    await Font.loadAsync({
        "robora-regular": require("./assets/font/Roboto-Regular.ttf"), // "require" для подключения локальных файлов
        "robota-bold": require("./assets/font/Roboto-Bold.ttf")
    })
}

export default function App() {

  const [isReady, setIsReady] = useState(false)


  if (!isReady) {
    return <AppLoading  
      startAsync={loadAplication} 
      onError={ err => (console.log(err))}
      onFinish={()=>setIsReady(true)}
      />
  }



  return (
    <TodoState>
      <MainLauOut />
    </TodoState>
    
  );
}

