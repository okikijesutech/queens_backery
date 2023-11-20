import React from "react";
import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import ProfileItem from "../../components/ProfileItem";

const DATA = [
  {
    title: "Master Card",
    id: "1",
    navigate: "PaymentScreen",
  },
  {
    title: "Paypal",
    id: "2",
    navigate: "PaymentScreen",
  },
  {
    title: "Mobile Wallet",
    id: "3",
    navigate: "PaymentScreen",
  },
  {
    title: "Internet Banking",
    id: "4",
    navigate: "PaymentScreen",
  },
  {
    title: "Pay on Delivery",
    id: "5",
    navigate: "PaymentScreen",
  },
];

const PaymentMethod = () => {
  const renderItem = ({ item }) => {
    return <ProfileItem item={item} />;
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
    paddingTop: 20,
  },
});
export default PaymentMethod;
