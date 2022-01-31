import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
// pages
import Home from "./pages/Home";
import Settings from "./pages/Settings";

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
    <NavigationContainer>
      <NativeBaseProvider>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
// export default function App() {
//   return (
//     <NativeBaseProvider>
//       <Center
//         _dark={{ bg: "blueGray.900" }}
//         _light={{ bg: "blueGray.50" }}
//         px={4}
//         flex={1}
//       >
//         <Navigation />
//         <ToggleDarkMode />
//       </Center>
//     </NativeBaseProvider>
//   );
// }
