import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AddTodo } from "./src/AddTodo"

import { NavBar } from "./src/NavBar"

export default function App() {
  return (
    <View >
      < NavBar title="ToDo App" />
      <View style={styles.container}>
        < AddTodo />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   paddingHorizontal: 30,
   paddingVertical: 20
  }
   
});
