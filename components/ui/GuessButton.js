import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/colors";

function GuessButton({ children, style, callback }) {
  const pressHandler = () => {
    callback();
  };
  return (
    <View style={[styles.buttonOuterContainer, style]}>
      <Pressable
        onPress={pressHandler}
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderColor: Colors.primary700,
    borderWidth: 4,
    borderRadius: 16,
    overflow: "hidden",
    marginHorizontal: 28,
  },
  buttonInnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    padding: 4,
    backgroundColor: Colors.primary600,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 48,
  },
  pressed: {
    opacity: 0.75,
  },
});

export default GuessButton;
