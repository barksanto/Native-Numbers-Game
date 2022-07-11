import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import StartGameScreen from "./screens/StartGameScreen"

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <StatusBar style="auto" />
      <StartGameScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
})
