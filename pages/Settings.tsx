import React from "react";
import { View } from "react-native";
import ToggleDarkMode from "../components/ToggleDarkMode";

const Settings = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ToggleDarkMode />
    </View>
  );
};

export default Settings;
