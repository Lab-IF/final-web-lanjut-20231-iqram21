import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Pages/Home";
import Navbar from "./Pages/NabBar";
import Trending from "./Pages/Trending";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {<Stack.Screen name="Navbar" component={Navbar} options={{ headerShown: false }} />}
        {<Stack.Screen name="Home" component={Home} />}
        {<Stack.Screen name="Trending" component={Trending} />}

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
