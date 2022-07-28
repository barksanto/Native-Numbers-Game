import { View, Text, StyleSheet } from "react-native"
import Title from "../components/Title"
import Colors from "../constants/colors"
import { useState } from "react"

function generateRandomNumBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min) + min)

  if (rndNum === exclude) {
    return generateRandomNumBetween(min, max, exclude)
  } else {
    return rndNum
  }
}

function GameScreen() {
  const initialGuess = generateRandomNumBetween(1, 100)

  const [currentGuess, setCurrentGuess] = useState()
  return (
    <View style={styles.screen}>
      <Title>Opponents Guess</Title>
      {/* Guess made my device */}
      <View>
        <Text>Higher or Lower</Text>
        {/* +
        - */}
      </View>
      <Text>LOG ROUNDS</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.mainYellow,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.mainYellow,
    padding: 12,
    borderRadius: 6,
  },
})

export default GameScreen
