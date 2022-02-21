import React, { useState, useEffect } from "react";
import { TextArea, Text, Button, useToast, ScrollView, VStack, Container } from "native-base";
import { useUser } from "./UserContext";
import supabase from "../services/supabaseClient";
import "react-native-url-polyfill/auto";
import moment from "moment";

type Journal = {
  id: number
  entry: string
  created_at: string
}

const Form = () => {
    const { user } = useUser();
    const [sendData, setSendData] = useState({});
    const [showData, setShowData] = useState<Array<Journal>>([]);
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
      const { entry, user_id, created_at } = payload;
      const { data, error } = await supabase
      .from('journals')
      .insert([
        { entry, user_id, created_at },
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
      getUserJournals();
    }
  
    return <VStack alignContent="center" paddingTop={4} paddingLeft={3} space={3} w="xs">
          <TextArea placeholder="Whats on your mind?" w="xs" margin="auto" onChangeText={value => setSendData({ ...sendData,
            entry: value,
            user_id: user!.id,
            created_at: moment().toString()
          })} maxLength={150} color="white"/>
          <Button width="xs" onPress={() => addJournal({...sendData})}>Add journal</Button>
          <ScrollView w="lg" maxH="77%">
            <VStack space={4} w="lg">
              {showData.map(journal => <Container key={journal.id}>
                <Text w="xs" color="success.600">
                  {journal.created_at}
                </Text>
                <Text w="xs">
                  {journal.entry}
                </Text>
              </Container>)}
            </VStack>
          </ScrollView>
      </VStack>
}

export default Form;

