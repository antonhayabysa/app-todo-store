import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { AppContext } from "../../context/context";
import React, { useContext } from "react";
import { Button, Card, Icon } from "react-native-elements";

const Cart = () => {
  const { state, setState } = useContext(AppContext);
  return (
    <SafeAreaView>
      <Text>Cart</Text>
      {state.cart.map((item) => (
        <Card>
          <Card.Title>{item.title}</Card.Title>
          <Card.Image>{item.imageUrl}</Card.Image>
          <Text>{item.text} </Text>
          <Button>{item.button}</Button>
        </Card>
      ))}
    </SafeAreaView>
  );
};

export default Cart;
