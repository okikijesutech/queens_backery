import React from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import ProfileItem from "../components/ProfileItem";
import pizza from "../../assets/pizza.png";

const DATA = [
  {
    title: "My Review",
    side: "YOu have purchased 12 items",
    id: "1",
    navigate: "MyReview",
  },
  {
    title: "Address",
    side: "2 Addresses",
    id: "2",
    navigate: "Address",
  },
  {
    title: "Payment Method",
    side: "",
    id: "3",
    navigate: "PaymentMethod",
  },
  {
    title: "Promo Code",
    side: "you have special promo codes",
    id: "4",
    navigate: "PromoCode",
  },
  {
    title: "Settings",
    side: "Notication, Passwords, etc",
    id: "5",
    navigate: "Settings",
  },
];

const ProfileScreen = () => {
  const renderItem = ({ item }) => {
    return <ProfileItem item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={pizza} />
        <View>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Vivian Chuckwebuka
          </Text>
          <Text>User ID: 127460</Text>
        </View>
      </View>
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
    paddingTop: 45,
    paddingHorizontal: 16,
    backgroundColor: "white",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 16,
  },
});
export default ProfileScreen;
