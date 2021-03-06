import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext, useEffect } from "react";
import { Button, Card, Icon } from "react-native-elements";
import { ScrollView, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { AppContext } from "../../context/context";

const productsData = [
  {
    id: "1",
    imageUrl:
      "https://surlybikes.com/uploads/bikes/Straggler_BK2125_Background-1200x800.jpg",
    title: "Road Bike",
    text: "It's an exciting time to be buying a road bike, regardless of your budget. Never has there been such a choice at every price point. The category has expanded greatly in the last few years, reflecting trends, riding styles and improvements in design and manufacturing.",
    buttonText: "Buy me 1.000$",
  },
  {
    id: "2",
    imageUrl:
      "https://surlybikes.com/uploads/bikes/Straggler_BK2125_Background-1200x800.jpg",
    title: "Road Bike",
    text: "It's an exciting time to be buying a road bike, regardless of your budget. Never has there been such a choice at every price point. The category has expanded greatly in the last few years, reflecting trends, riding styles and improvements in design and manufacturing.",
    buttonText: "Buy me 1.000$",
  },
];

const ProductCard = ({ id, imageUrl, title, text, buttonText, onClick }) => {
  return (
    <Card>
      <Card.Title>{title}</Card.Title>
      <Card.Image
        style={{ padding: 10 }}
        source={{
          uri: imageUrl,
        }}
      />
      <Text style={{ marginBottom: 15, paddingTop: 15 }}>{text} </Text>
      <Button
        icon={
          <Icon name="code" color="#ffffff" iconStyle={{ marginRight: 10 }} />
        }
        buttonStyle={{
          borderRadius: 50,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 25,
        }}
        title={buttonText}
        onPress={() => onClick({ id })}
      />
    </Card>
  );
};

const Home = () => {
  const { state, setState } = useContext(AppContext);

  console.log(">context", state);
  const handleBuyClick = ({ id }) => {
    const product = state.products.find((product) => product.id === id);

    console.log(">product", product);

    const productCartIndex = state.cart.findIndex(
      (item) => item.product.id === id
    );
    const isProductInCart = productCartIndex !== -1;

    let newCart = [];
    if (isProductInCart) {
      newCart = state.cart.map((item, index) => {
        if (index === productCartIndex) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });
    } else {
      newCart = [...state.cart, { quantity: 1, product }];
    }

    setState({
      ...state,
      cart: newCart,
    });
  };

  useEffect(() => {
    setState({ ...state, products: productsData });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          {state.products.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              imageUrl={item.imageUrl}
              text={item.text}
              title={item.title}
              buttonText={item.buttonText}
              onClick={handleBuyClick}
            />
          ))}
          <Card>
            <Card.Title>Mountain bikes</Card.Title>
            <Card.Image
              style={{ padding: 10 }}
              source={{
                uri: "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/11/2020/03/carbonjack29-2020-antidotebikes-2-1300x867-1.jpg",
              }}
            />
            <Text style={{ marginBottom: 15, paddingTop: 15 }}>
              It's an exciting time to be buying a road bike, regardless of your
              budget. Never has there been such a choice at every price point.
              The category has expanded greatly in the last few years,
              reflecting trends, riding styles and improvements in design and
              manufacturing.
            </Text>

            <Button
              icon={
                <Icon
                  name="code"
                  color="#ffffff"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              buttonStyle={{
                borderRadius: 50,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 25,
              }}
              title="Buy me 2.500$"
            />
            <Card.Title>Electric bikes</Card.Title>
            <Card.Image
              style={{ padding: 10 }}
              source={{
                uri: "https://www.topgear.com/sites/default/files/images/news-article/carousel/2021/02/f91b35702d59bc62d277e4dc563783b9/dsc07009.jpg?w=976&h=549",
              }}
            />
            <Text style={{ marginBottom: 15, paddingTop: 15 }}>
              It's an exciting time to be buying a road bike, regardless of your
              budget. Never has there been such a choice at every price point.
              The category has expanded greatly in the last few years,
              reflecting trends, riding styles and improvements in design and
              manufacturing.
            </Text>

            <Button
              icon={
                <Icon
                  name="code"
                  color="#ffffff"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              buttonStyle={{
                borderRadius: 50,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 25,
              }}
              title="Buy me 17.500$"
            />
            <Card.Title>Road Bike</Card.Title>
            <Card.Image
              style={{ padding: 10 }}
              source={{
                uri: "https://mediavektor.org/uploads/shosvelo1.jpg",
              }}
            />
            <Text style={{ marginBottom: 15, paddingTop: 15 }}>
              It's an exciting time to be buying a road bike, regardless of your
              budget. Never has there been such a choice at every price point.
              The category has expanded greatly in the last few years,
              reflecting trends, riding styles and improvements in design and
              manufacturing.
            </Text>

            <Button
              icon={
                <Icon
                  name="code"
                  color="#ffffff"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              buttonStyle={{
                borderRadius: 50,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="Buy me 2000$"
            />
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {},
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: "row",
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});
