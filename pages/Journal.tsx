import React from "react";
import { VStack } from "native-base"
import { Keyboard } from "react-native";

// import components
import Form from "../components/Form"
import ShowJournals from "../components/ShowJournals"

const Journal = () => {
  return <VStack flex={1} onTouchStart={() => Keyboard.dismiss()}>
      <Form />
      <ShowJournals />
    </VStack>;
}

export default Journal;