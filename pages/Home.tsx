import React, {useState} from "react";
import { View, Heading, Divider, Text } from "native-base";
import { Calendar } from "react-native-calendars"

const Home = ({ navigation }: any) => {

  return (
    <View style={{ flex: 1, alignItems: "center", paddingTop: 20}}>
      <Calendar
        style={{
            width: 350,
            height: 355,
            borderRadius: 10
        }}
        theme={{
            dayTextColor: '#FFFFFF',
            todayTextColor: '#00adf5',
            backgroundColor: '#000000',
            calendarBackground: '#000000',
            monthTextColor: '#FFFFFF'
        }}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => navigation.navigate('Summary', {...day})}
        hideExtraDays={true}
      />
      <Divider my="1" />
      <Heading paddingTop={5}>
        Summary
      </Heading>
      <Text>
          Coming soon!
      </Text>
    </View>
  );
};

export default Home;
//{navigation.navigate('Summary', {...day})}