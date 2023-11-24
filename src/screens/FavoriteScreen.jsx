import React from "react";
import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import ham from "../../assets/hamburger.png";
import pizza from "../../assets/pizza.png";
import FavoriteItem from "../components/FavourtieItem";

const DATA = [
  {
    title: "Hamburger",
    side: "With Toppings",
    price: "$ 20",
    img: ham,
    id: 1,
    rating: 5.0,
  },
  {
    title: "Pizza",
    side: "With Chicken Toppings",
    price: "$ 35",
    img: pizza,
    id: 2,
    rating: 4.0,
  },
  {
    title: "Hamburger",
    side: "With No Toppings",
    price: "$ 10",
    img: ham,
    id: 3,
    rating: 3.5,
  },
];

const Favorite = () => {
  const renderItem = ({ item }) => {
    return <FavoriteItem item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 55,
    paddingHorizontal: 16,
    backgroundColor: "white",
  },
});
export default Favorite;
