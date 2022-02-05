import React from "react";
import { View } from "react-native";
import { TextArea } from "native-base"

const Journal = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextArea />
    </View>
  );
};

export default Journal;
