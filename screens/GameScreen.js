import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import GuessContainer from "../components/game/guessContainer";
import Colors from "../constants/colors";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen(userNumber) {
  const intialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(intialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Higher or Lower?</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>+</Text>
        </View>
        <GuessContainer>69</GuessContainer>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>-</Text>
        </View>
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  infoContainer: {
    margin: 14,
    padding: 14,
    backgroundColor: Colors.primary600,
    borderColor: Colors.primary700,
    borderWidth: 4,
    borderRadius: 16,
  },
  infoText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 300,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    width: 100,
    padding: 4,
    backgroundColor: Colors.primary600,
    borderColor: Colors.primary700,
    borderWidth: 4,
    borderRadius: 16,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 48,
  },
});

export default GameScreen;
