import { View, Text, StyleSheet } from "react-native"

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Opponent's Guess!</Text>
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
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ddb52f",
  },
})

export default GameScreen
