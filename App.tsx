import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// pages
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Journal from "./pages/Journal";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <NativeBaseProvider>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Journal" component={Journal} />
          <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
