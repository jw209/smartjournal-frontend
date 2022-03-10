import React from "react";
import supabase from "../services/supabaseClient";

import { View, Divider, Button, Heading, Text } from "native-base";

const Logout = () => {
  return (
    <View style={{ paddingTop: "10%", flex: 1, alignItems: "center"}}>
      <Heading>Goodbye</Heading>
      <Divider my="5" />
      <Text >
        You will be signed out of your account and will be
        required to log in again upon launching the app!
      </Text>
      <Button marginTop="20%" width="50%" onPress={() => supabase.auth.signOut()}>Signout</Button>
    </View>
  );
};
export default Logout;
