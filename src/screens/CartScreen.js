import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Button,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import pizza from "../../assets/pizza.png";
import CartItem from "../components/CartItem";

const DATA = [
  {
    title: "Hamburger",
    side: "With Toppings",
    price: "20",
    img: pizza,
    id: "1",
  },
  {
    title: "Pizza",
    side: "With Chicken Toppings",
    price: "35",
    img: pizza,
    id: "2",
  },
  {
    title: "Hamburger",
    side: "With No Toppings",
    price: "10",
    img: pizza,
    id: "3",
  },
];

const CartScreen = () => {
  const [counts, setCounts] = useState({
    1: 1, // Assuming '1' is the id of the first item
    2: 1, // Assuming '2' is the id of the second item
    3: 1, // Assuming '3' is the id of the third item
  });
  const renderItem = ({ item }) => {
    return (
      <CartItem
        item={item}
        count={counts[item.id]}
        setCount={(newCount) => setCounts({ ...counts, [item.id]: newCount })}
      />
    );
  };

  return (
    <SafeAreaView style={Styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          alignSelf: "center",
          marginBottom: 10,
        }}
      >
        Order Summary
      </Text>
      <View style={{ flexDirection: "row", marginBottom: 5 }}>
        <Text style={{ fontSize: 16, marginRight: 200 }}>Sub Total</Text>
        <Text style={{ fontSize: 16 }}>$30.00</Text>
      </View>
      <View style={{ flexDirection: "row", marginBottom: 15 }}>
        <Text style={{ fontSize: 16, marginRight: 175 }}>Delivery Fee</Text>
        <Text style={{ fontSize: 16 }}>$5.70</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          borderTopWidth: 2,
          borderStyle: "dotted",
          padding: 3,
        }}
      >
        <Text style={{ fontSize: 16, marginRight: 225 }}>Total</Text>
        <Text style={{ fontSize: 16 }}>$35.70</Text>
      </View>
      <View style={Styles.address}>
        <Text style={{ fontSize: 16, marginRight: 80 }}>Address</Text>
        <Text style={{ fontSize: 16 }}>13, DLE estate</Text>
        <Feather name='arrow-down' size={24} color={"#ffc533"} />
      </View>
      <Button title='Check Out' color='#ffc533' />
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    paddingHorizontal: 16,
    paddingBottom: 20,
    backgroundColor: "white",
  },
  address: {
    flexDirection: "row",
    backgroundColor: "white",
    alignContent: "space-between",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 20,
    padding: 7,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    borderRadius: 15,
  },
});
export default CartScreen;
