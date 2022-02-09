import React from "react";
import { Box, Popover, Button } from "native-base";
import supabase from "../services/supabaseClient"

const FormConfirm = (entry: any) => {

  const { created_at, text, feelings, user } = entry;

  const addJournal = async (created_at: any, text: any, feelings: any, user: any) => {
    const { data: todo, error } = await supabase
      .from('journals')
      .insert({ created_at: created_at, text: text, feelings: feelings, user: user })
      .single()
    if (error) console.log(error.message)
    console.log("insert ran!")
  }

  return <Box h="60%" w="30%" paddingTop={5}>
      <Popover trigger={triggerProps => {
      return <Button {...triggerProps} colorScheme="primary">
              Add entry
            </Button>;
    }}>
        <Popover.Content accessibilityLabel="Add journal" w="56">
          <Popover.Arrow />
          <Popover.CloseButton />
          <Popover.Header>Add entry</Popover.Header>
          <Popover.Body>
            This will store your journal entry in a secure place for you to view at a later time
          </Popover.Body>
          <Popover.Footer justifyContent="flex-end">
            <Button.Group space={2}>
              <Button colorScheme="primary" onPress={() => { 
                  console.log(created_at);
                  console.log(text);
                  console.log(feelings);
                  console.log(user);
                  addJournal(created_at, text, feelings, user);
                }}>Add</Button>
            </Button.Group>
          </Popover.Footer>
        </Popover.Content>
      </Popover>
    </Box>;
}

export default FormConfirm;