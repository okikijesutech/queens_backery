import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const FavoriteItem = ({ item }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate(item.navigate);
  };
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View>
        <Text style={{ fontSize: 18 }}>{item.title}</Text>
        <Text>{item.side}</Text>
      </View>
      <Feather name='arrow-right' size={24} color={"#ffc533"} />
    </TouchableOpacity>
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
    justifyContent: "space-between",
    height: 100,
    backgroundColor: "white",
    color: "black",
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
export default FavoriteItem;
