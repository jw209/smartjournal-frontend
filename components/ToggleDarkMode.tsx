import React from "react";
import { HStack, Text, Switch } from "native-base";

// We will use this later, theming is not on our priority list

// Color Switch Component
function ToggleDarkMode({ colorMode, toggleColorMode }: any) {
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light" ? true : false}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}

export default ToggleDarkMode;
