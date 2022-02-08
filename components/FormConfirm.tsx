import React from "react";
import { Box, Popover, Button } from "native-base";
import supabase from "../services/supabaseClient"
import { useUser } from "./UserContext"

const FormConfirm = (entry: any) => {

  const { user } = useUser();

  const addJournal = async (entry: string) => {
    const journal = entry.trim();
    if (journal.length) {
      const { data: todo, error } = await supabase
        .from('journals')
        .insert({ journal, user: user.id })
        .single()
      if (error) console.log(error.message)
    }
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
                  addJournal(entry);
                  console.log(entry);
                }}>Add</Button>
            </Button.Group>
          </Popover.Footer>
        </Popover.Content>
      </Popover>
    </Box>;
}

export default FormConfirm;