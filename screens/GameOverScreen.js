import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  Platform,
} from "react-native";
import Colors from "../constants/colors";
import Card from "../components/ui/Card";
import PrimaryButton from "../components/ui/PrimaryButton";
import RoundCard from "../components/ui/RoundCard";
import { randomOutline, definedOutline } from "../hooks/outline";
function GameOverScreen({ rounds, userNumber, resetGame, roundData }) {
  const { width, height } = useWindowDimensions();

  const landscape = height < 500;

  const imageContainerSize = landscape
    ? { height: "100%", width: "100%", marginTop: 36 }
    : { width: "80%", aspectRatio: 1 };

  const dynamicScreen = landscape
    ? { padding: 12, marginBottom: 20, flex: 1, height: height }
    : { padding: 12, marginBottom: 20, height: height };

  const D_gameOverContainer = landscape
    ? { marginTop: Platform.select({ ios: 10, android: 5 }) }
    : { marginTop: Platform.select({ ios: 48, android: 56 }) };

  const portraitLayout = (
    <>
      <View style={[styles.portraitView, definedOutline("green")]}>
        <Card style={[styles.card, definedOutline("blue")]}>
          <Text style={styles.summaryText}>
            Your phone needed{" "}
            <Text style={styles.highlightedText}>{rounds}</Text> rounds
          </Text>
          <Text style={styles.summaryText}>
            To guess the number{" "}
            <Text style={styles.highlightedText}>{userNumber}</Text>.
          </Text>
        </Card>
        <View style={[styles.portraitImageContainer, definedOutline("purple")]}>
          <View
            style={[
              styles.imageContainer,
              imageContainerSize,
              definedOutline(),
            ]}
          >
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
        </View>
        <View style={[{ width: "80%" }, definedOutline("white")]}>
          <PrimaryButton
            style={[styles.newGame, { marginTop: 48, marginBottom: 48 }]}
            onPress={() => resetGame()}
          >
            Start New Game
          </PrimaryButton>
        </View>
      </View>
    </>
  );
  const landscapeLayout = (
    <>
      <View style={styles.landscapeView}>
        <View style={[styles.landscapeImageContainer, definedOutline("green")]}>
          <View
            style={[
              styles.imageContainer,
              imageContainerSize,
              definedOutline(),
            ]}
          >
            <ScrollView style={[styles.scrollContainerOuter, definedOutline()]}>
              <View style={[styles.scrollContainerInner, definedOutline()]}>
                {roundData.map((data, index) =>
                  index < roundData.length - 1 ? (
                    <RoundCard
                      key={index}
                      guess={data.guess}
                      hol={data.hol}
                      index={index - roundData.length + 1}
                    />
                  ) : null
                )}
              </View>
            </ScrollView>
            <Image
              style={styles.image}
              source={require("../assets/images/success.png")}
            />
          </View>
        </View>
        <View style={[styles.infoButtonContainer, definedOutline()]}>
          <Card style={styles.card}>
            <Text style={styles.summaryText}>
              Your phone needed{" "}
              <Text style={styles.highlightedText}>{rounds}</Text> rounds
            </Text>
            <Text style={styles.summaryText}>
              To guess the number{" "}
              <Text style={styles.highlightedText}>{userNumber}</Text>.
            </Text>
          </Card>
          <PrimaryButton
            style={[styles.newGame, { marginTop: 18 }]}
            onPress={() => resetGame()}
          >
            Start New Game
          </PrimaryButton>
        </View>
      </View>
    </>
  );

  return (
    <View style={[dynamicScreen, , styles.screen, definedOutline("red")]}>
      <View
        style={[
          styles.gameOverContainer,
          D_gameOverContainer,
          definedOutline(),
        ]}
      >
        <Text style={styles.gameOverText}>GameOver!</Text>
      </View>

      {height < 500 ? landscapeLayout : portraitLayout}

      {height > 500 ? "" : ""}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "space-around",
  },
  card: {
    marginTop: 12,
  },
  gameOverContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary700,
    borderRadius: 16,
    borderWidth: 4,
    borderColor: Colors.primary600,
    padding: 10,
  },
  gameOverText: {
    fontFamily: "open-sans-bold",
    color: "white",
    fontSize: 48,
  },
  landscapeView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  portraitView: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  infoButtonContainer: {
    height: "100%",
    justifyContent: "space-around",
  },
  portraitImageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  landscapeImageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    justifyContent: "center",
    aspectRatio: 1,
    alignItems: "center",
    borderRadius: 200,
    borderWidth: 6,
    borderColor: Colors.primary800,
    overflow: "hidden",
  },
  image: {
    opacity: 0.2,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: -1,
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
