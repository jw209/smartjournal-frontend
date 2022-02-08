import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// pages
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

export default function App() {
  const { user } = useUser();

  return (
    <UserContextProvider>
      <NavigationContainer theme={DarkTheme}>
        <NativeBaseProvider theme={theme}>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Journal" component={Journal} />
            <Drawer.Screen name="Settings" component={Settings} />

            {user ? (
              <Drawer.Screen name="Logout" component={Logout} />
            ) : (
              <>
                <Drawer.Screen name="Login" component={Login} />
                <Drawer.Screen name="Register" component={Register} />
              </>
            )}
          </Drawer.Navigator>
        </NativeBaseProvider>
      </NavigationContainer>
    </UserContextProvider>
  );
}
