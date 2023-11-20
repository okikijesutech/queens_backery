import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

const MyReview = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>My review</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    paddingHorizontal: 16,
  },
});
export default MyReview;
