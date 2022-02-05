import React from "react";
import { Box, Popover, Button } from "native-base";

const FormConfirm = () => {
    return <Box h="60%" w="100%" alignItems="center">
        <Popover trigger={triggerProps => {
        return <Button {...triggerProps} colorScheme="danger">
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
                <Button colorScheme="coolGray" variant="ghost">
                  Cancel
                </Button>
                <Button colorScheme="danger">Delete</Button>
              </Button.Group>
            </Popover.Footer>
          </Popover.Content>
        </Popover>
      </Box>;
}

export default FormConfirm;