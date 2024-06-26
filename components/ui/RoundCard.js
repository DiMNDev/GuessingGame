import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import Colors from "../../constants/colors";

function RoundCard({ guess, hol, index }) {
  const { width, height } = useWindowDimensions();

  const marginBottom =
    height < 500 ? { marginBottom: 20 } : { marginBottom: 0 };

  return (
    <View style={[styles.roundContainer, marginBottom]}>
      <Text style={styles.text}>Round {index * -1}</Text>
      <View style={styles.rowContainer}>
        <Text style={[styles.text, { fontSize: 20 }]}>
          {hol} than <Text style={{ color: Colors.accent500 }}>{guess}</Text>
        </Text>
      </View>
    </View>
  );
}
export default RoundCard;

const styles = StyleSheet.create({
  roundContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 14,
    marginHorizontal: 18,
    padding: 16,
    backgroundColor: Colors.primary600,
    borderRadius: 16,
    borderColor: Colors.primary700,
    borderWidth: 4,
    borderRadius: 16,
    // Android
    elevation: 8,
    // iOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  rowContainer: {
    flexDirection: "row",
    height: 22,
  },
  text: {
    fontFamily: "open-sans-bold",
    fontSize: 28,
    color: "white",
  },
});
