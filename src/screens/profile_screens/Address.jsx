import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

const Address = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Address</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Address;
