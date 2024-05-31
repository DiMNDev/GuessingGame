import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

function Title({ children }) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: Colors.primary600,
    borderRadius: 16,
    borderColor: Colors.primary700,
    borderWidth: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    padding: 12,
  },
});

export default Title;
