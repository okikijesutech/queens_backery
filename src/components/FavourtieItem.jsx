import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const FavoriteItem = ({ item }) => (
  <View style={styles.container}>
    <Image source={item.img} style={{ marginRight: 15 }} />
    <View style={{ alignContent: "space-between" }}>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.title}</Text>
      <Text>{item.side}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>{item.rating}</Text>
        <Text style={{ color: "#ffc533", fontSize: 16 }}>{item.price}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
    alignItems: "center",
    height: 100,
    backgroundColor: "#f1eef9",
    color: "black",
  },
});
export default FavoriteItem;
