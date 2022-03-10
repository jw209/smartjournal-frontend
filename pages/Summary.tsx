import React, { useState, useEffect } from "react";
import { Center, Text, VStack, HStack, ScrollView, Container, Divider } from "native-base";
import { View } from "react-native";
import supabase from "../services/supabaseClient";
import "react-native-url-polyfill/auto";
import Emoji from 'react-native-emoji'
import {useUser} from "../components/UserContext";

type Journal = {
    id: number
    entry: string
    created_at: string
    mood: string
    timestamp: string
  }

const Summary = ({route, navigation}: any) => {

    if (!route?.params) {
      return <Center><Text>No journal entry found</Text></Center>;
    }

    const { dateString } = route.params;
    const [showData, setShowData] = useState<Array<Journal>>([]);
    const { user } = useUser();
    // console.log(dateString);
    if (!dateString) {
      navigation.navigate("Home");
    }

    useEffect(() => {
        getEntryPerDate()
      }, [])

    const getEntryPerDate = async () => {
        if (!user?.id) {
          setShowData([]);
          return;
        } 
        let { data: journals, error } = await supabase
            .from('journals')
            .select('*').eq('timestamp', dateString).eq('user_id',  user?.id)
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
        getEntryPerDate();
        return <ScrollView w="lg" maxH="100%">
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
    
    return (
        <View style={{
          padding: 15
        }}>
            {listJournals()}
        </View>
    );
};

export default Summary;