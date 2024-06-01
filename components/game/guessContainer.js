import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function GuessContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    width: 100,
    marginVertical: 24,
    backgroundColor: Colors.primary600,
    borderRadius: 16,
    borderColor: Colors.primary700,
    borderWidth: 4,
  },
  text: {
    fontFamily: "open-sans-bold",
    fontSize: 36,
    color: Colors.accent500,
    textAlign: "center",
    padding: 12,
  },
});

export default GuessContainer;
