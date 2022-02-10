import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// pages
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Journal from "./pages/Journal";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import { UserContextProvider, useUser } from "./components/UserContext";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const { user } = useUser();

  if (user) {
    return (
      <UserContextProvider>
        <NavigationContainer theme={DarkTheme}>
          <NativeBaseProvider theme={theme}>
            <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="Home" component={Home} />
              <Drawer.Screen name="Journal" component={Journal} />
              <Drawer.Screen name="Settings" component={Settings} />)
              <Drawer.Screen name="Logout" component={Logout} />
            </Drawer.Navigator>
          </NativeBaseProvider>
        </NavigationContainer>
      </UserContextProvider>
    );
  }
  return (
    <UserContextProvider>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer theme={DarkTheme}>
          <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </UserContextProvider>
  );
}
