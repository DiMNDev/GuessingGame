import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Card from "../components/ui/Card";
import Title from "../components/ui/Title";

function StartGameScreen({ setPickedNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    // console.log(enteredText.target);
    setEnteredNumber(enteredText);
  }

  const resetEnteredNumber = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = enteredNumber;

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 99", [
        {
          text: "Okay",
          style: "destructive",
          onPress: resetEnteredNumber,
        },
      ]);
      return;
    }
    setPickedNumber(chosenNumber);
    console.log("Valid number");
  };

  return (
    <View style={styles.screen}>
      <Title textStyle={styles.header}>Guessing Game</Title>
      <Card style={styles.inputContainer}>
        <Text style={styles.infoText1}>{`Pick a number `}</Text>
        <Text style={styles.infoText2}>{`1 <> 99`}</Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetEnteredNumber}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  header: {
    color: "white",
    fontSize: 32,
  },
  infoText1: {
    fontFamily: "open-sans-bold",
    color: "white",

    fontSize: 32,
  },
  infoText2: {
    fontFamily: "open-sans-bold",
    color: "white",

    fontSize: 24,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    color: Colors.accent500,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    marginTop: 28,
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
