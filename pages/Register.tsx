import React, { useState } from "react";
import { validate } from "email-validator";

import {
  Heading,
  Center,
  Box,
  VStack,
  FormControl,
  Input,
  Button,
  useToast,
} from "native-base";
import register from "../services/register";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [passwd, setPasswd] = useState<string>("");
  const [confirmPasswd, setConfirmPasswd] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const toast = useToast();

  const handleRegister = async () => {
    setIsLoading(true);
    const isEmailValid = validate(email);
    if (!isEmailValid) {
      toast.show({
        description: "Email is invalid!",
        accessibilityLiveRegion: "assertive",
      });
      setIsLoading(false);
      return;
    }

    if (passwd !== confirmPasswd) {
      toast.show({
        description: "Passwords do not match!",
        accessibilityLiveRegion: "assertive",
      });
      setIsLoading(false);
      return;
    }

    const { error } = await register(email, passwd);

    if (error) {
      toast.show({
        description:
          "There was an error processing your request. Please try again later.",
        accessibilityLiveRegion: "assertive",
      });
      return;
    }

    toast.show({
      description: "Registration successful! Please check you email to verify.",
      accessibilityLiveRegion: "assertive",
    });
  };

  return (
    <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="semibold"
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
          fontWeight="medium"
          size="xs"
        >
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input value={email} onChangeText={setEmail} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input value={passwd} onChangeText={setPasswd} type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input
              value={confirmPasswd}
              onChangeText={setConfirmPasswd}
              type="password"
            />
          </FormControl>
          <Button
            onPress={handleRegister}
            disabled={isLoading}
            mt="2"
            colorScheme="indigo"
          >
            Sign up
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default Register;
