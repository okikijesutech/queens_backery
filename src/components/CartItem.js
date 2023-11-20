import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

const CartItem = ({ item, count, setCount }) => {
  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleSub = () => {
    setCount(count - 1);
  };
  const price = () => {
    return item.price * count;
  };
  return (
    <View style={styles.container}>
      <Image source={item.img} style={{ margin: 5 }} />
      <View>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.side}</Text>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.counter}>
            <Button onPress={handleSub} title='-' color={"#ffc533"} />
            <Text style={{ marginHorizontal: 4 }}>{count}</Text>
            <Button onPress={handleAdd} title='+' color={"#ffc533"} />
          </View>
          <Text style={styles.price}>{"$ " + price()}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
    alignItems: "center",
    height: 175,
    backgroundColor: "white",
    color: "black",
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 50,
    marginTop: 5,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
export default CartItem;
