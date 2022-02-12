import React from "react";
import supabase from "../services/supabaseClient";

import { View, Button, Text } from "react-native";

const Logout = () => {
  return (
    <View>
      <Button title="Sign out" onPress={() => supabase.auth.signOut()} />
    </View>
  );
};
export default Logout;
