import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
} from "react-native";
import Title from "../components/ui/Title";
import GuessContainer from "../components/game/guessContainer";
import Colors from "../constants/colors";
import GuessButton from "../components/ui/GuessButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import RoundCard from "../components/ui/RoundCard";

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

  const { width, height } = useWindowDimensions();
  const marginTop = height < 500 ? { marginTop: 20 } : { marginTop: 60 };

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
      <Title containerStyle={marginTop}>Opponent's Guess</Title>
      <View style={styles.buttonsContainer}>
        <GuessButton callback={nextGuessHandler.bind(this, "higher")}>
          <Ionicons name="add" size={48} />
        </GuessButton>
        <GuessContainer>{currentGuess}</GuessContainer>
        <GuessButton callback={nextGuessHandler.bind(this, "lower")}>
          <Ionicons name="remove" size={48} />
        </GuessButton>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Higher or Lower?</Text>
      </View>
      <FlatList
        style={{
          marginTop: 12,
          alignSelf: "stretch",
        }}
        data={guessRounds}
        renderItem={({ item, index }) =>
          index < guessRounds.length - 1 ? (
            <RoundCard
              key={index}
              guess={item.guess}
              hol={item.hol}
              index={index - guessRounds.length + 1}
            />
          ) : (
            ""
          )
        }
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
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
    marginVertical: 4,
  },
});

export default GameScreen;
