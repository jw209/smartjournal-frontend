import React from "react";
import { Box, VStack } from "native-base"
import { Keyboard } from "react-native";

// import components
import Form from "../components/Form"
import FormConfirm from "../components/FormConfirm";

const Journal = () => {
  return <VStack flex={1} onTouchStart={() => Keyboard.dismiss()}>
      <Form />
      <FormConfirm />
    </VStack>;
}

export default Journal;