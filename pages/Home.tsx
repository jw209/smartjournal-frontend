import React, {useState} from "react";
import { View, Heading, Divider, ScrollView, VStack, Container, HStack, Text } from "native-base";
import { Calendar } from "react-native-calendars";
import supabase from "../services/supabaseClient";
import { useUser } from "../components/UserContext";

type Journal = {
  id: number
  entry: string
  created_at: string
  mood: string
  timestamp: string
  inference: string
}

const emotionMap = new Map([
  ["grinning", "joy"],
  ["angry", "angry"],
  ["open_mouth", "surprise"],
  ["fearful", "fearfulness"],
  ["heart_eyes", "love"],
  ["pensive", "sadness"]
])

const Home = ({ navigation }: any) => {

  var date = "";

  const { user } = useUser();
  const [showData, setShowData] = useState<Array<Journal>>([]);

  const getEntriesPerDate = async () => {
    let { data: journals, error } = await supabase
        .from('journals')
        .select('*').eq('timestamp', date).eq('user_id', user!.id)
        if (error) {
            console.log(error.message);
            return;
          } 
          journals!.sort((a, b) => {
            return b.id - a.id;
          });
    setShowData(journals!);
  }

  const listJournals = () => {
    return <ScrollView w="lg" maxH="70%" maxW="90%" marginTop="3">
      <VStack space={4} w="lg">
        {showData.map(journal => <Container key={journal.id}>
          <HStack>
            <Text w="xs" color="success.600">
              {journal.created_at}
            </Text>
          </HStack>
          <Text w="xs">
            {journal.entry}
          </Text>
          <Text w="xs" color="rose.400">
            {emotionMap.get(journal.inference)}
          </Text>
          <Divider my="2" />
        </Container>)}
      </VStack>
    </ScrollView>
  }

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
        onDayPress={(day) => {
          date = day.dateString;
          getEntriesPerDate();
        }}
        hideExtraDays={true}
      />
      <Divider my="1" />
      <Heading>
        Summary:
      </Heading>
      {listJournals()}
    </View>
  );
};

export default Home;
