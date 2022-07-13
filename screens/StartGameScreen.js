import { View, TextInput, StyleSheet } from "react-native"
import PrimaryButton from "../components/PrimaryButton"

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput placeholder="enter txt here" />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1, // tells component to take up as much space available - commenting it out allows it to use only as much space as it needs
    padding: 16,
    marginTop: 100,
    backgroundColor: "#72063c",
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
})
