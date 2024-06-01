import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/colors";

function GuessButton({ children, style, callback }) {
  const pressHandler = () => {
    callback();
  };
  const [textColor, setTextColor] = useState("white");

  return (
    <View style={[styles.buttonOuterContainer, style]}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        onPressIn={() => setTextColor(Colors.primary800)}
        onPressOut={() => setTextColor("white")}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={[styles.buttonText, { color: textColor }]}>
          {children}
        </Text>
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
    justifyContent: "center",
    alignItems: "center",
    width: 75,
    height: 75,
    padding: 4,
    backgroundColor: Colors.primary600,
    elevation: 2,
  },
  buttonText: {
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.95,
  },
});

export default GuessButton;
