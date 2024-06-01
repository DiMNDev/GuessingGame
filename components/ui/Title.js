import { StyleSheet, Text, View, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function Title({ children, containerStyle, textStyle }) {
  return (
    <View style={[styles.titleContainer, containerStyle]}>
      <Text style={[styles.title, textStyle]}>{children}</Text>
    </View>
  );
}

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: deviceHeight * 0.05,
    backgroundColor: Colors.primary600,
    borderRadius: 16,
    borderColor: Colors.primary700,
    borderWidth: 4,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: Colors.accent500,
    textAlign: "center",
    padding: 12,
    maxWidth: "80%",
  },
});

export default Title;
