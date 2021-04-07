import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  rating: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  textRating: {
    color: "white",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
  },
  textContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#000",
    opacity: 0.8,
    padding: 10,
  },
});

export default styles;
