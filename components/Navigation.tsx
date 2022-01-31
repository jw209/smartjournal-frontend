import React from "react";
import { Menu, HamburgerIcon, Box, Pressable } from "native-base";

function Navigation() {
    return <Box h="80%" w="90%" alignItems="flex-start">
        <Menu w="190" trigger={triggerProps => {
        return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                <HamburgerIcon />
                </Pressable>;
        }}>
            <Menu.Item>Journal</Menu.Item>
            <Menu.Item>Settings</Menu.Item>
        </Menu>
        </Box>;
}

export default Navigation;