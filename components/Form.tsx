import React, { useState } from "react";
import { TextArea, Box, Text, Button } from "native-base"
import { useUser } from "./UserContext"
import supabase from "../services/supabaseClient"
import "react-native-url-polyfill/auto"

const Form = () => {
    const { user } = useUser();
    const [formData, setData] = useState({});

    const addJournal = async (payload: any) => {
      const { entry, user_id } = payload;
      const { data, error } = await supabase
      .from('journals')
      .insert([
        { entry, user_id },
      ])
      if (error) console.log(error.message);
    }
  
    return <Box width="90%" mx="9" maxW="80%" paddingTop={5}>
          <TextArea placeholder="Whats on your mind?" height="30%" onChangeText={value => setData({ ...formData,
          entry: value,
          user_id: user!.id
        })} maxLength={150} color="white"/>
        <Button marginTop={4} width="50%" onPress={() => addJournal({...formData})}>Add journal</Button>
      </Box>
      
}

export default Form;
