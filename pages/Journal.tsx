import React from "react";
import { VStack } from "native-base"
import { Keyboard } from "react-native";

// import components
import Form from "../components/Form"

const Journal = () => {
  return <VStack flex={1} onTouchStart={() => Keyboard.dismiss()}>
      <Form />
    </VStack>;
}

export default Journal;