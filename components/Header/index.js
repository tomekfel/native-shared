import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const Header = () => {
  return (
    <View style={{ marginTop: 50, marginBottom: 20, paddingHorizontal: 20 }}>
      <Text style={{ color: "#888", textTransform: "uppercase" }}>
        Saturday 9 January
      </Text>
      <Text style={{ color: "#fff", fontSize: 32, fontWeight: "600" }}>
        Today
      </Text>
    </View>
  );
};

export default Header;
