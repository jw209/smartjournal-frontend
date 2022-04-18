import React from "react";
import { Button, Center, VStack, HStack, Heading } from "native-base";
import { View, Image } from "react-native";

const Welcome = ({ navigation }: any) => {
  return (
    <View>
      <Center paddingLeft={3} paddingRight={3} paddingTop="40%">
        <VStack space={6}>
          <Image style={{
            resizeMode: 'contain',
            maxWidth: "100%",
            padding: 10
          }} source={require('../assets/SJ_Logo_V2_WT.png')} />
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
          <Heading size="2xl">Embrace mindfulness.</Heading>
        </VStack>
      </Center>
    </View>
  );
};

export default Welcome;
