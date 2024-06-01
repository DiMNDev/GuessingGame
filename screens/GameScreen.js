import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import GuessContainer from "../components/game/guessContainer";
import Colors from "../constants/colors";
import GuessButton from "../components/ui/GuessButton";
import Ionicons from "@expo/vector-icons/Ionicons";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minbBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, gameOver, incrementRounds, roundsData }) {
  const intialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(intialGuess);
  const [guessRounds, setGuessRounds] = useState([
    { guess: intialGuess, hol: "First Guess" },
  ]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      roundsData(guessRounds);
      console.log(guessRounds);
      gameOver();
    }
  }, [currentGuess, userNumber, gameOver]);

  useEffect(() => {
    minbBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("You can't lie to me!", "You know where liars go...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
      setGuessRounds((prev) => [
        { guess: currentGuess, hol: "lower" },
        ...prev,
      ]);
    } else {
      minbBoundary = currentGuess + 1;
      setGuessRounds((prev) => [
        { guess: currentGuess, hol: "higher" },
        ...prev,
      ]);
    }
    const newRndNumber = generateRandomBetween(
      minbBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    incrementRounds();
  }
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Higher or Lower?</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <GuessButton callback={nextGuessHandler.bind(this, "higher")}>
          <Ionicons name="add" size={48} />
        </GuessButton>
        <GuessContainer>{currentGuess}</GuessContainer>
        <GuessButton callback={nextGuessHandler.bind(this, "lower")}>
          <Ionicons name="remove" size={48} />
        </GuessButton>
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
  },
});

export default GameScreen;
