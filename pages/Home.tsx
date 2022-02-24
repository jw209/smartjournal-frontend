import React from "react";
import { View, Heading, Divider } from "native-base";

const Home = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Heading>
        Calendar
      </Heading>
      <Divider my="5" />
      <Heading>
        Summary
      </Heading>
    </View>
  );
};

export default Home;
