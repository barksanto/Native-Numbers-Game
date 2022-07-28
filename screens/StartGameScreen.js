import { View, TextInput, StyleSheet, Alert, Text } from "react-native"
import PrimaryButton from "../components/PrimaryButton"
import { useState } from "react"
import Colors from "../constants/colors"

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("")
  // const [roundNumber, setRoundNumber] = useState(0)  // play code

  function handleInputChange(enteredText) {
    setEnteredNumber(enteredText)
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber)

    if (isNaN(chosenNumber) || chosenNumber <= 1 || chosenNumber >= 99) {
      // alert("Sorry, not a valid number!")
      Alert.alert("Invalid Input", "Number must be between 1-99", [
        { text: "OKAY", style: "destructive", onPress: resetInputHandler },
      ])
      return
    }
    console.log("Valid number! We can move to game screen now")
    onPickNumber(chosenNumber)
    // setRoundNumber((prevRoundNum) => (prevRoundNum += 1)) // play code
  }

  function resetInputHandler() {
    setEnteredNumber("")
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="#"
        placeholderTextColor="white"
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={handleInputChange}
      />

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1, // tells component to take up as much space available - commenting it out allows it to use only as much space as it needs
    padding: 16,
    marginTop: 100,
    backgroundColor: Colors.darkPlum,
    marginHorizontal: 24,
    borderRadius: 6,

    elevation: 10, //android shadow

    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.mainYellow,
    borderBottomWidth: 2,
    color: Colors.mainYellow,
    marginVertical: 8,
    fontWeight: "bold",
    width: 80,
    textAlign: "center",
    alignSelf: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
})
