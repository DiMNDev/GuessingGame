import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import { useState } from "react";

function PrimaryButton({ children, onPress, style }) {
  const [textColor, setTextColor] = useState("white");

  function pressHandler() {
    onPress();
  }

  return (
    <View style={[styles.buttonOuterContainer, style]}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressedButton, styles.buttonInnerContainer]
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
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
    borderColor: Colors.primary800,
    borderWidth: 2,
  },
  buttonInnerContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    elevation: 2,
    backgroundColor: Colors.primary500,
    elevation: 2,
  },
  buttonText: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  pressedButton: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
