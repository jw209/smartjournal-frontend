import React, { useState } from "react";
import { TextArea, Box, Text } from "native-base"
import { Keyboard } from "react-native";

const Form = () => {
  const [formData, setData] = useState({});

  return <Box width="90%" mx="9" maxW="300px" paddingTop={4}>
        <TextArea placeholder="Whats on your mind?" height="50%" onChangeText={value => setData({ ...formData,
        journal: value
      })} maxLength={150} color="white" onSubmitEditing={() => {
        console.log(formData);
      }}/>
      <Text paddingTop={3}>Simply press 'return' to submit</Text> 
    </Box>;
}

const Journal = () => {
  return <Box flex={1} onTouchStart={() => Keyboard.dismiss()}>
      <Form />
    </Box>;
}

export default Journal;