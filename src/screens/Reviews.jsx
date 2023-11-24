import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

const Reviews = () => {
  const [review, setReview] = useState();
  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View style={{ marginBottom: 12 }}>
            <Text style={{ fontSize: 24 }}>
              Share Your Experience with us Vivian
            </Text>
          </View>
          <View style={{ marginBottom: 16 }}>
            <Text style={{ color: "#777777", fontSize: 16, marginBottom: 6 }}>
              Add a Photo or Video
            </Text>
            <View style={styles.uploadContainer}>
              <Text>Click here to Upload</Text>
              <SimpleLineIcons name='cloud-upload' size={24} color='black' />
            </View>
          </View>
          <View>
            <Text style={{ color: "#777777", fontSize: 16, marginBottom: 6 }}>
              Write Your review
            </Text>
            <TextInput
              editable
              multiline
              numberOfLines={10}
              maxLength={120}
              placeholder='your review'
              onChangeText={(text) => setReview(text)}
              value={review}
              style={[
                styles.textarea,
                { textAlignVertical: "top", padding: 10 },
              ]}
            />
            <Text
              style={{ alignSelf: "flex-end", color: "#777777", fontSize: 12 }}
            >
              Maximum of 500 words
            </Text>
          </View>
          <Button title='Submit' color={"#ffc533"} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  uploadContainer: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    borderRadius: 10,
    elevation: 2,
    shadowOpacity: 0.25,
  },
  textarea: {
    backgroundColor: "white",
    borderRadius: 5,
  },
});
export default Reviews;
