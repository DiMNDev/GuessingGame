import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import Colors from "../../constants/colors";
import { useState } from "react";

function Title({ children, containerStyle, textStyle }) {
  const { width, height } = useWindowDimensions();
  return (
    <View style={[styles.titleContainer, containerStyle]}>
      <Text style={[styles.title, textStyle]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
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
    padding: 10,
    maxWidth: "80%",
  },
});

export default Title;
