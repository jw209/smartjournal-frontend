import React, { useState, useEffect } from "react";
import { TextArea, Text, Button, Center, useToast, ScrollView, Container, VStack } from "native-base";
import { useUser } from "./UserContext";
import supabase from "../services/supabaseClient";
import "react-native-url-polyfill/auto";
import { maxWidth } from "styled-system";

type Journal = {
  id: number
  entry: string
  created_at: Date
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
      const { entry, user_id } = payload;
      const { data, error } = await supabase
      .from('journals')
      .insert([
        { entry, user_id },
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
  
    return <VStack paddingLeft={3} space={2} paddingTop={4} width={300}>
          <TextArea placeholder="Whats on your mind?" height={100} maxHeight={100} width={300} maxWidth={300} onChangeText={value => setSendData({ ...sendData,
            entry: value,
            user_id: user!.id
          })} maxLength={150} color="white"/>
          <Button width={100} marginTop={3} onPress={() => addJournal({...sendData})}>Add journal</Button>
          <ScrollView width={400}>
            <Container paddingTop={3}>
              {showData.map(journal => <Text width={300} marginBottom={3} key={journal.id}>
                {journal.entry}
                </Text>)}    
            </Container>
          </ScrollView>
      </VStack>
}

export default Form;

