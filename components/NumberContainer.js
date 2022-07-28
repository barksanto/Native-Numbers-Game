import { View, Text, StyleSheet } from "react-native"
import Colors from "../constants/colors"

function NumberContainer({ children }) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.mainYellow,
    padding: 24,
    borderRadius: 8,
  },
  numbertText: {},
})
