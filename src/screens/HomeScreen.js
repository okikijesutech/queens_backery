import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import bread from "../../assets/Bread.png";
import fries from "../../assets/fries.png";
import ham from "../../assets/hamburger.png";
import pizza from "../../assets/pizza.png";
import CategoryItem from "../components/CategoryItem";
import Item from "../components/Item";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Bread",
    img: bread,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Fries",
    img: fries,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Pizza",
    img: pizza,
  },
  {
    id: "58694a0f-3da1-471f-bd96-789387843622",
    title: "Hamburger",
    img: ham,
  },
];

const DATA1 = [
  {
    id: "bd7acbea-c1b1-3ad53abb28ba",
    title: "BreadHamburger with lettuce, tomato, and cheese",
    img: bread,
    price: "$ 12",
  },
  {
    id: "3ac68afc-c605-fbd91aa97f63",
    title: "Hamburger with lettuce, tomato, and cheese",
    img: fries,
    price: "$ 5",
  },
  {
    id: "58694a0f-3da1-145571e29d72",
    title: "Hamburger with lettuce, tomato, and cheese",
    img: pizza,
    price: "$ 20",
  },
  {
    id: "58694a0f-3da1-789387843622",
    title: "Hamburger with lettuce, tomato, and cheese",
    img: ham,
    price: "$ 11",
  },
];

const DATA2 = [
  {
    id: "bd7acbea-3ad53abb28ba",
    title: "BreadHamburger with lettuce, tomato, and cheese",
    img: bread,
    price: "$ 12",
  },
  {
    id: "3ac68afc-fbd91aa97f63",
    title: "Hamburger with lettuce, tomato, and cheese",
    img: fries,
    price: "$ 5",
  },
  {
    id: "58694a0f-145571e29d72",
    title: "Hamburger with lettuce, tomato, and cheese",
    img: pizza,
    price: "$ 20",
  },
  {
    id: "58694a0f-789387843622",
    title: "Hamburger with lettuce, tomato, and cheese",
    img: ham,
    price: "$ 11",
  },
];

const HomeScreen = () => {
  const [selectedId, setSelectedId] = useState();
  const [clicked, setClicked] = useState(false);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#ffc533" : "#f1eef9";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <CategoryItem
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  const renderItem1 = ({ item }) => {
    const backgroundColor = item.id === clicked ? "#ffc533" : "white";
    return (
      <Item
        item={item}
        onPress={() => setClicked(true)}
        backgroundColor={backgroundColor}
      />
    );
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontSize: 32 }}>Welcome Vivian</Text>
              <Text style={{ fontSize: 14 }}>
                What would you like to order today?
              </Text>
            </View>
            <MaterialCommunityIcons
              name='bell-badge'
              size={24}
              color='#ffc533'
            />
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.searchField}>
              <Ionicons
                name='search'
                size={12}
                color='#888'
                style={styles.searchIcon}
              />
              <TextInput style={styles.input} placeholder='Search' />
            </View>
            <TouchableOpacity style={styles.button}>
              <Ionicons name='filter-sharp' size={24} color={"white"} />
            </TouchableOpacity>
          </View>
          <ScrollView
            style={styles.scrollVIewContainer}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.categoriesContainer}>
              <View style={styles.categoriesHeader}>
                <Text style={styles.catText}>Categories</Text>
                <TouchableOpacity>
                  <Text>See all</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <FlatList
              data={DATA1}
              keyExtractor={(item) => item.id}
              renderItem={renderItem1}
              extraData={clicked}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />

            <View style={styles.categoriesContainer}>
              <View style={styles.categoriesHeader}>
                <Text style={styles.catText}>Most Popular</Text>
              </View>
              <FlatList
                data={DATA2}
                keyExtractor={(item) => item.id}
                renderItem={renderItem1}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    paddingTop: 45,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    paddingBottom: 8,
  },
  searchField: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1eef9",
    borderRadius: 10,
    padding: 6,
    marginRight: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
    marginRight: 8,
  },
  button: {
    backgroundColor: "#ffc533",
    width: 46,
    height: 46,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  categoriesContainer: {},
  categoriesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  catText: {
    fontSize: 24,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
  scrollVIewContainer: {},
});

export default HomeScreen;
