import React, { useEffect, useState } from "react";
import { Center, Text, Container, Heading, VStack } from "native-base"
import { useUser } from "./UserContext"
import supabase from "../services/supabaseClient"
import "react-native-url-polyfill/auto"


type Journal = {
    entry: string;
}

const ShowJournals = () => {
    const { user } = useUser();
    const [formData, setFormData] = useState<Array<Journal>>([]);

    useEffect(() => {
        getUserJournals()
    }, [])

    const getUserJournals = async () => {
        let { data: journals, error } = await supabase
            .from('journals')
            .select("entry").eq('user_id',  user!.id)
      if (error) console.log(error.message);
      setFormData(journals!)
    }
    
    return <VStack space={4} alignItems="center">
      <Container>
        {formData.map(journal => <Text>
          {journal.entry}
        </Text>)}    
      </Container>
    </VStack>;
}

export default ShowJournals;