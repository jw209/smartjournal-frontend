import React, { useState, useEffect } from "react";
import { TextArea, Text, Button, useToast, Divider, ScrollView, VStack, Container, Box, Stack, Slider, HStack } from "native-base";
import { useUser } from "./UserContext";
import supabase from "../services/supabaseClient";
import "react-native-url-polyfill/auto";
import moment from "moment";
import Emoji from 'react-native-emoji'

type Journal = {
  id: number
  entry: string
  created_at: string
  mood: string
  timestamp: string
}

const emojiMap = new Map([
  [1, "grinning"],
  [2, "angry"],
  [3, "open_mouth"],
  [4, "fearful"],
  [5, "heart_eyes"],
  [6, "pensive"]
])

const Form = () => {
    const { user } = useUser();
    const [sendData, setSendData] = useState({entry: "", mood: "grinning", user_id: user?.id ?? null, created_at: ""});
    const [showData, setShowData] = useState<Array<Journal>>([]);
    const [mood, setMood] = useState('grinning');
    const toast = useToast();

    useEffect(() => {
      getUserJournals()
    }, [])

    const getUserJournals = async () => {
      let { data: journals, error } = await supabase
      .from('journals')
      .select("*").eq('user_id',  user!.id)
      if (error) {
        console.log(error.message);
        return;
      } 
      journals!.sort((a, b) => {
        return b.id - a.id;
      });
      setShowData(journals!)
    }

    // add journal to the database 
    const addJournal = async (payload: any) => {
      const { entry, user_id, created_at, timestamp } = payload;
      const { data, error } = await supabase
      .from('journals')
      .insert([
        { entry, user_id, created_at, mood, timestamp },
      ])
      if (error) {
        console.log(error.message);
        return;
      }
      toast.show({
        description: "Successfully submitted journal entry",
        status: "success",
        placement: "bottom"
      })
      setSendData({...sendData, entry: "", mood: "grinning"});
      getUserJournals();
    }
  
    const listJournals = () => {
      return <ScrollView w="lg" maxH="70%">
      <VStack space={4} w="lg">
        {showData.map(journal => <Container key={journal.id}>
          <HStack>
            <Text w="xs" color="success.600">
              {journal.created_at}
            </Text>
            <Emoji name={journal.mood} style={{fontSize: 25}} />
          </HStack>
          <Text w="xs">
            {journal.entry}
          </Text>
          <Divider my="2" />
        </Container>)}
      </VStack>
    </ScrollView>
    }

    return <VStack alignContent="center" paddingTop={4} paddingLeft={3} space={3} w="xs">
          <HStack space={4} alignItems="center" w="75%" maxW="300">
            <Emoji name={mood} style={{fontSize: 25}} />
            <Slider minValue={1} maxValue={6} defaultValue={1} size="lg" width={275} colorScheme="cyan" onChange={v => {
                let myEmoji = emojiMap.get(v) as string;
                setMood(myEmoji);
              }}>
              <Slider.Track>
                <Slider.FilledTrack />
              </Slider.Track>
              <Slider.Thumb />
            </Slider>
          </HStack>
          <TextArea placeholder="Whats on your mind?" w="xs" margin="auto" value={sendData?.entry || ""} onChangeText={value => setSendData({ ...sendData,
            entry: value,
            user_id: user!.id,
            created_at: moment().toString(),
            timestamp: moment().format("YYYY-MM-DD")
          })} maxLength={150} color="white"/>
          <Button width="xs" onPress={() => {
            addJournal({...sendData})
            }}>Add journal</Button>
          {listJournals()}
      </VStack>
}

export default Form;


