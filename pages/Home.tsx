import React from "react";
import { View, Heading, Divider } from "native-base";
import JournalCalendar from "../components/JournalCalendar";

const Home = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, alignItems: "center", paddingTop: 20}}>
      <JournalCalendar />
      <Divider my="1" />
      <Heading>
        Summary
      </Heading>
    </View>
  );
};

export default Home;
