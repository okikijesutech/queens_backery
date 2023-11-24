import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Item = ({ item, backgroundColor }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigation = useNavigation();

  const handleFavoritePress = () => {
    setIsFavorite(!isFavorite);
  };

  const handlePress = () => {
    navigation.navigate("ItemScreen");
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={handleFavoritePress}
        style={{ alignSelf: "flex-end", backgroundColor }}
      >
        <AntDesign
          name={isFavorite ? "heart" : "hearto"}
          size={24}
          color={"#ffc533"}
        />
      </TouchableOpacity>

      <Image source={item.img} style={styles.catImg} />
      <Text style={[styles.title]}>{item.title}</Text>
      <View style={styles.buttonSection}>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity onPress={handlePress} style={styles.button}>
          <Text>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
    justifyContent: "space-between",
    alignItems: "center",
    width: 175,
    height: 250,
    backgroundColor: "white",
    color: "black",
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.125,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 12,
  },
  catImg: {
    width: 80,
    height: 80,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 20,
  },
  button: {
    borderColor: "#ffc533",
    borderWidth: 2,
    padding: 5,
    borderRadius: 10,
  },
  buttonSection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Item;
