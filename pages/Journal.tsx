import React from "react";
import { Container } from "native-base"
import { Keyboard } from "react-native";

// import components
import Form from "../components/Form"

const Journal = () => {
  return <Container onTouchStart={() => Keyboard.dismiss()}>
    <Form />
  </Container>
}

export default Journal;