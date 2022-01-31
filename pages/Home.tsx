import React from "react";
import { View, Button } from "react-native";

const Home = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("Settings")}
        title="Go to Settings"
      />
    </View>
  );
};

export default Home;
