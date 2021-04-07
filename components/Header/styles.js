import { StyleSheet, StatusBar } from "react-native";

const statusBarHeight = StatusBar.currentHeight;

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 100,
    height: statusBarHeight,
    backgroundColor: "#fff",
    opacity: 0.5,
  },
});

export default styles;
