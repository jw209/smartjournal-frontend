import React from "react";
import { Box, Popover, Button } from "native-base";
import supabase from "../services/supabaseClient"

const FormConfirm = (obj: any) => {

  

  type Journal = {
    id: number
    created_at: Date
    entry: string
    user_id: string
  }

  const addJournal = async (obj: any) => {
    const { entry, user_id } = obj;
    console.log(entry)
    console.log(user_id)
    const { data, error } = await supabase
      .from<Journal>('journals')
      .insert({ entry: entry, user_id: user_id })
      .single()
    if (error) console.log(error.message)
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
                  addJournal(obj);
                }}>Add</Button>
            </Button.Group>
          </Popover.Footer>
        </Popover.Content>
      </Popover>
    </Box>;
}

export default FormConfirm;