import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

const Settings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Settings</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Settings;
