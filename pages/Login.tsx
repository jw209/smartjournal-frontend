import React, { useState } from "react";
import { View } from "react-native";
import {
  Heading,
  Center,
  Box,
  VStack,
  FormControl,
  Input,
  Button,
  Link,
  // HStack,
  // Text,
  useToast,
} from "native-base";
import { validate } from "email-validator";
import login from "../services/login";

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState<string>("");
  const [passwd, setPasswd] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const toast = useToast();

  const handleLogin = async () => {
    setIsLoading(true);
    const isEmailValid = validate(email);
    if (!isEmailValid) {
      toast.show({
        description: "Email is invalid!",
        accessibilityLiveRegion: "assertive",
        status: "error"
      });
      setIsLoading(false);
      return;
    }

    const { error } = await login(email, passwd);

    if (error) {
      toast.show({
        description: "There was an issue logging you in. Please try again.",
        accessibilityLiveRegion: "assertive",
        status: "error"
      });
      return;
    }

    toast.show({
      description: "You have successfully logged in!",
      accessibilityLiveRegion: "assertive",
      status: "success"
    });
  };

  return (
    <View>
      <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading
            size="lg"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
          >
            Welcome
          </Heading>
          <Heading
            mt="1"
            _dark={{
              color: "warmGray.200",
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs"
          >
            Sign in to continue!
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email ID</FormControl.Label>
              <Input value={email} onChangeText={setEmail} />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input value={passwd} onChangeText={setPasswd} type="password" />
              <Link
                _text={{
                  fontSize: "xs",
                  fontWeight: "500",
                  color: "indigo.500",
                }}
                alignSelf="flex-end"
                mt="1"
              >
                Forget Password?
              </Link>
            </FormControl>
            <Button
              onPress={handleLogin}
              disabled={isLoading}
              mt="2"
              variant="outline"
              colorScheme="secondary"
            >
              Sign In
            </Button>
            {/* <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              I'm a new user.{" "}
            </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              href="#"
            >
              Sign Up
            </Link>
          </HStack> */}
          </VStack>
        </Box>
      </Center>
    </View>
  );
};

export default Login;
