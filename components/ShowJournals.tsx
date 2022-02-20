import React, { useEffect, useState } from "react";
import { Center, ScrollView, VStack } from "native-base"
import { useUser } from "./UserContext"
import supabase from "../services/supabaseClient"
import "react-native-url-polyfill/auto"


type Journal = {
    entry: string
    created_at: Date
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
      formData.sort((x, y) => +new Date(y.created_at) - +new Date(x.created_at));
    }

    return <ScrollView maxW="400" h="80">
      <VStack space={4} alignItems="center">
          {formData.map(journal => 
            <Center w="80" h="20" bg="indigo.100" rounded="md" padding={2} shadow={3}>
                {journal.entry}
            </Center>)}
      </VStack>
    </ScrollView> 
      
}

export default ShowJournals;