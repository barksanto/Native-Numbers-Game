import { View, Text } from "react-native"

function NumberContainer({ children }) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  )
}

export default NumberContainer
