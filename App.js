import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./src/screens/home/home";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favorites from "./src/screens/favorites/favorites";
import Cart from "./src/screens/cart/cart";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Favorites" component={Favorites} />
          <Tab.Screen name="Cart" component={Cart} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
