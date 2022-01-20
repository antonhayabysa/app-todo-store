import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./src/screens/home/home";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favorites from "./src/screens/favorites/favorites";
import Cart from "./src/screens/cart/cart";
import { AppContext } from "./src/context/context";
import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();

const App = () => {
  const [state, setState] = useState({
    products: [],
    cart: [],
    favorites: [],
  });

  return (
    <AppContext.Provider value={{ state, setState }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Home"
              component={Home}
              options={{ tabBarIcon: () => <Icon name={"home"} /> }}
            />
            <Tab.Screen name="Favorites" component={Favorites} />
            <Tab.Screen name="Cart" component={Cart} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </AppContext.Provider>
  );
};

export default App;
