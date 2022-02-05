import React, { useState } from "react";
import { TextArea, Box, Text } from "native-base"

// import components
import FormConfirm from "./FormConfirm";

const Form = () => {
    const [formData, setData] = useState({});
  
    return <Box width="90%" mx="9" maxW="80%" paddingTop={5}>
          <TextArea placeholder="Whats on your mind?" height="20%" onChangeText={value => setData({ ...formData,
          journal: value,
          date: new Date().toDateString()
        })} maxLength={150} color="white" onSubmitEditing={() => {
        }}/>
        <FormConfirm entry={formData}/>
      </Box>
      
}

export default Form;
