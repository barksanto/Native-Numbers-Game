import { View, Text, StyleSheet } from "react-native"
import Title from "../components/Title"
import Colors from "../constants/colors"

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Opponents Guess</Title>
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
