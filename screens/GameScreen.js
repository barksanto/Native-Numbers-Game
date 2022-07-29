import { View, Text, StyleSheet } from "react-native"

import Title from "../components/Title"
import NumberContainer from "../components/NumberContainer"
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

function GameScreen({ userNumber }) {
  const initialGuess = generateRandomNumBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  return (
    <View style={styles.screen}>
      <Title>Opponents Guess</Title>
      <NumberContainer>{ currentGuess}</NumberContainer>

      {/* GUESS */}
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

})

export default GameScreen
