import react, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  Image,
} from "react-native";
import pizza from "../../assets/pizza.png";

const ItemScreen = () => {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleSub = () => {
    setCount(count - 1);
  };
  const price = () => {
    return count;
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image source={pizza} />
      </View>
      <Text>Description</Text>
      <Text>
        Our Whooper hambuger is in different sizes and with caramelized onions,
        cheese, cabbage, minced meat as fillings.
      </Text>
      <View style={styles.textContainer}>
        <View style={styles.counter}>
          <Button onPress={handleSub} title='-' color={"#ffc533"} />
          <Text style={{ marginHorizontal: 4 }}>{count}</Text>
          <Button onPress={handleAdd} title='+' color={"#ffc533"} />
        </View>
        <Text style={styles.price}>{"$ " + price()}</Text>
      </View>
      <Text>Add Toppings</Text>
      <Button title='Add to Cart' color={"#ffc533"} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 16,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    color: "#ffc533",
  },
});
export default ItemScreen;
