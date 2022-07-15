import { View, TextInput, StyleSheet } from "react-native"
import PrimaryButton from "../components/PrimaryButton"
import { useState } from "react"

function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState("")

  function handleInputChange(enteredText) {
    setEnteredNumber(enteredText)
    console.log(enteredText)
  }

  function confirmInputHandler() {
    if (enteredNumber >= 1 && enteredNumber <= 99) { // if passes
      console.log("legit number")
    } else { // if not passes
      console.log("not a legit number")
    }
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
          <PrimaryButton>Reset</PrimaryButton>
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
    backgroundColor: "#4e0329",
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
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
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
