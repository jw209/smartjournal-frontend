import React, { useState } from "react";
import { TextArea, Box, Text } from "native-base"
import { useUser } from "./UserContext"

// import components
import FormConfirm from "./FormConfirm";

const Form = () => {
    const { user } = useUser();
    const [formData, setData] = useState({});
  
    return <Box width="90%" mx="9" maxW="80%" paddingTop={5}>
          <TextArea placeholder="Whats on your mind?" height="20%" onChangeText={value => setData({ ...formData,
          created_at: new Date().toDateString(),
          text: value,
          feelings: null,
          user: user
        })} maxLength={150} color="white" onSubmitEditing={() => {
        }}/>
        <FormConfirm {...formData}/>
      </Box>
      
}

export default Form;
