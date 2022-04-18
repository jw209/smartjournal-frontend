import React from "react";
import { Button, Center, VStack, HStack, Heading } from "native-base";
import { View } from "react-native";
import logo from "./SJ_Logo_V2_WT.png";

const Welcome = ({ navigation }: any) => {
  return (
    <View>
      <Center paddingLeft={3} paddingRight={3} paddingTop="40%">
        <VStack space={6}>

          <Heading size="3xl">Embrace mindfulness.</Heading>
          <HStack space={6}>
            <Button
              width="40%"
              size="lg"
              colorScheme="primary"
              onPress={() => navigation.navigate("Login")}
            >
              LOGIN
            </Button>
            <Button
              width="40%"
              size="lg"
              colorScheme="secondary"
              onPress={() => navigation.navigate("Register")}
            >
              SIGN UP
            </Button>
          </HStack>
        </VStack>
      </Center>
    </View>
  );
};

export default Welcome;
