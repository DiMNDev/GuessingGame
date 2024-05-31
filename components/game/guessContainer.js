import { View, Text, StyleSheet } from "react-native";

function GuessContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {},
});

export default GuessContainer;
