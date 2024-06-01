import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import Card from "../components/ui/Card";
import PrimaryButton from "../components/ui/PrimaryButton";
import GuessButton from "../components/ui/GuessButton";
import RoundCard from "../components/ui/RoundCard";
function GameOverScreen({ rounds, userNumber, resetGame, roundData }) {
  return (
    <View style={styles.screen}>
      <View style={styles.gameOverContainer}>
        <Text style={styles.gameOverText}>GameOver!</Text>
      </View>
      <Card style={styles.card}>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlightedText}>{rounds}</Text>{" "}
          rounds
        </Text>
        <Text style={styles.summaryText}>
          To guess the number{" "}
          <Text style={styles.highlightedText}>{userNumber}</Text>.
        </Text>
      </Card>
      <View style={styles.imageContainer}>
        <ScrollView style={styles.scrollContainerOuter}>
          <View style={styles.scrollContainerInner}>
            {roundData.map((data, index) =>
              index < roundData.length - 1 ? (
                <RoundCard
                  key={index}
                  guess={data.guess}
                  hol={data.hol}
                  index={index - roundData.length + 1}
                />
              ) : (
                ""
              )
            )}
          </View>
        </ScrollView>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>

      <PrimaryButton
        style={[styles.newGame, { marginTop: 18 }]}
        onPress={() => resetGame()}
      >
        Start New Game
      </PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 12,
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  gameOverContainer: {
    backgroundColor: Colors.primary700,
    borderRadius: 16,
    borderWidth: 4,
    borderColor: Colors.primary600,
    padding: 18,
  },
  gameOverText: {
    fontFamily: "open-sans-bold",
    color: "white",
    fontSize: 48,
  },
  imageContainer: {
    width: 400,
    height: 400,
    borderRadius: 200,
    borderWidth: 6,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    opacity: 0.2,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "-1",
  },
  summaryText: {
    fontFamily: "open-sans-bold",
    color: "white",
    fontSize: 18,
  },
  highlightedText: {
    fontFamily: "open-sans-bold",
    color: Colors.accent500,
    textShadowColor: Colors.primary800,
    textShadowRadius: 2,
    textShadowOffset: { width: 0, height: 2 },
    fontSize: 24,
  },
  scrollContainerOuter: { width: "auto", opacity: 1 },

  scrollContainerInner: {
    flex: 1,
    marginVertical: 30,
    height: "100%",
    width: "100%",
    borderBlockColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  roundDataContainer: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  roundText: {
    fontFamily: "open-sans-bold",
    color: "white",
    margin: 8,
    fontSize: 24,
  },
});

export default GameOverScreen;
