import { useCallback, useEffect, useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [rounds, setRounds] = useState(0);
  const [roundData, setRoundData] = useState([{}]);

  const [fontsLoaded, fontsError] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontsError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(parseInt(pickedNumber));
    setGameIsOver(false);
  }

  function incrementRoundsHandler() {
    setRounds((rounds) => (rounds += 1));
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  function getGuessRoundsdata(rounds) {
    setRoundData(rounds);
  }

  let screen = <StartGameScreen setPickedNumber={pickedNumberHandler} />;

  function resetGame() {
    setUserNumber(null);
    setRounds(0);
    screen = <StartGameScreen setPickedNumber={pickedNumberHandler} />;
  }

  if (userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        gameOver={gameOverHandler}
        incrementRounds={incrementRoundsHandler}
        roundsData={getGuessRoundsdata}
      />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        rounds={rounds}
        roundData={roundData}
        userNumber={userNumber}
        resetGame={resetGame}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.accent500, Colors.primary700]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen} onLayout={onLayoutRootView}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
