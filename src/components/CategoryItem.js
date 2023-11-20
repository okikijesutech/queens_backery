import React from "react";
import { TouchableOpacity, Image, Text, StyleSheet } from "react-native";

const CategoryItem = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor }]}
  >
    <Image source={item.img} style={styles.catImg} />
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
    alignItems: "center",
  },
  title: {
    fontSize: 12,
  },
  catImg: {
    width: 50,
    height: 50,
  },
});

export default CategoryItem;
