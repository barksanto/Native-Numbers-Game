import { View, Text, StyleSheet } from "react-native"

import Title from "../components/Title"
import NumberContainer from "../components/NumberContainer"
import Colors from "../constants/colors"
import { useState } from "react"
import PrimaryButton from "../components/PrimaryButton"

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

  let minBoundary = 1;
  let maxBoundary = 100;

  function nextGuessHandler(direction) { // lower, greater (strings)
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else { 
      minBoundary = currentGuess + 1;
    }
    const newRandNumber = generateRandomNumBetween(minBoundary, maxBoundary, currentGuess)
    setCurrentGuess(newRandNumber)
  }




  return (
    <View style={styles.screen}>
      <Title>Opponents Guess</Title>
      <NumberContainer>{ currentGuess}</NumberContainer>

      {/* GUESS */}
      <View>
        <Text>Higher or Lower</Text>
        <View >{/* style={styles.buttons} */}
          <PrimaryButton onPress={nextGuessHandler.bind(this, ("greater"))}>+</PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>-</PrimaryButton>
        </View>
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
  buttons: {
    flexDirection: "row",
  }

})

export default GameScreen
