import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HeaderButton = ({ button, location, side }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(location);
  };

  const borderBottomColor = side === location ? "#ffc533" : "transparent";

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text
        style={{
          borderBottomColor: borderBottomColor,
          borderBottomWidth: 2,
          paddingBottom: 8,
          paddingRight: 20,
          paddingLeft: 30,
        }}
      >
        {button}
      </Text>
    </TouchableOpacity>
  );
};

export default HeaderButton;
