import { StyleSheet, ImageBackground, SafeAreaView } from "react-native"
import StartGameScreen from "./screens/StartGameScreen"
import { LinearGradient } from "expo-linear-gradient"
import { useState } from "react"
import GameScreen from "./screens/GameScreen"
import Colors from "./constants/colors"
import GameOverScreen from "./screens/GameOverScreen"

export default function App() {
  const [userNumber, setuserNumber] = useState()
  const [gameIsOver, setGameIsOver] = useState(true)

  function pickedNumberHandler(pickedNumber) {
    setuserNumber(pickedNumber)
    setGameIsOver(false)
  }
  
  function gameOverHandler() {
    setGameIsOver(true)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen/>
    console.log(`Game is over! User number is :${userNumber}`)
  }


  if (userNumber) {
    screen = (<GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />);
  } 

  return (
    <LinearGradient colors={[Colors.darkPlum, Colors.mainYellow]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {/* <StartGameScreen /> */}
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
})
