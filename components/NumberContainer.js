import { View, Text, StyleSheet } from "react-native"
import Colors from "../constants/colors"

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numbertText}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.mainYellow,
    padding: 24,
    borderRadius: 8, // not supported on Text element, that's why we use View
    margin: 24,
    alignItems: "center",
    justifyContent: "center"
  },
  numbertText: {
    color: Colors.mainYellow,
    fontSize: 36,
    fontWeight: "bold",

  },
})
