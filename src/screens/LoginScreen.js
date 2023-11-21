import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Button,
  Modal,
  PanResponder,
} from "react-native";
import { Feather, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [currentModal, setCurrentModal] = useState(1);
  const [agree, setAgree] = useState(false);

  const navigation = useNavigation();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleModalVisibility = () => {
    setModalVisibility(!modalVisibility);
  };

  const panResponder = useState(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        // Check if the gesture is moving downwards
        if (gestureState.dy > 0) {
          // Calculate the threshold to close the modal
          const threshold = 100;
          // Check if the gesture has passed the threshold
          if (gestureState.dy > threshold) {
            // Close the modal
            toggleModalVisibility();
          }
        }
      },
    })
  )[0];

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView>
          <TextInput
            style={styles.InputText}
            onChangeText={setUserName}
            value={userName}
            placeholder='Email'
          />
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              onChangeText={setPassword}
              value={password}
              placeholder='Password'
              secureTextEntry={!passwordVisible}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Text>
                {passwordVisible ? (
                  <Feather name='eye' size={24} color='black' />
                ) : (
                  <Feather name='eye-off' size={24} color='black' />
                )}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 12,
              marginBottom: 40,
            }}
          >
            <CheckBox
              checked={agree}
              onPress={() => setAgree(!agree)}
              containerStyle={{ marginRight: 0 }}
              checkedColor='#ffc533'
              uncheckedColor='#5b5a5f'
            />
            <Text style={{ marginRight: 55 }}> Remember Me</Text>
            <TouchableOpacity onPress={toggleModalVisibility}>
              <Text style={{ color: "#ffc533" }}>Forget Password</Text>
            </TouchableOpacity>
          </View>

          <Button
            title='Log In'
            color='#ffc533'
            onPress={() => navigation.navigate("Root")}
          />
          <Text style={{ alignSelf: "center", marginTop: 20 }}>
            Or Continue With
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: " #3C323B",
              paddingVertical: 10,
              paddingHorizontal: 15,
              width: 125,
              borderRadius: 10,
              marginBottom: 10,
              alignSelf: "center",
              marginTop: 25,
            }}
          >
            <AntDesign name='google' size={24} color='black' />
            <Text style={{ marginLeft: 5 }}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#f7f6fa",
              paddingVertical: 10,
              paddingHorizontal: 15,
              width: 125,
              borderRadius: 10,
              alignSelf: "center",
              marginTop: 10,
            }}
          >
            <AntDesign name='facebook-square' size={24} color='black' />
            <Text style={{ marginLeft: 5 }}>Facebook</Text>
          </TouchableOpacity>
          <View
            style={{ flexDirection: "row", alignSelf: "center", marginTop: 30 }}
          >
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text style={{ color: "#ffc533" }}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
      {currentModal === 1 && (
        <Modal visible={modalVisibility} animationType='slide'>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent} {...panResponder.panHandlers}>
              <TouchableOpacity
                onPress={toggleModalVisibility}
                style={{ alignSelf: "center" }}
              >
                <FontAwesome5 name='grip-lines' size={24} color='black' />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  alignSelf: "center",
                }}
              >
                Forgot Password
              </Text>
              <Text>
                Enter your email for the verification process, we will send you
                4 digits code for the email
              </Text>
              <TextInput
                style={styles.InputText}
                onChangeText={setUserName}
                value={userName}
                placeholder='Email'
              />
              <Button
                title='Continue'
                color={"#ffc533"}
                onPress={() => setCurrentModal(currentModal + 1)}
              />
            </View>
          </View>
        </Modal>
      )}
      {currentModal === 2 && (
        <Modal visible={modalVisibility} animationType='slide'>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent} {...panResponder.panHandlers}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  alignSelf: "center",
                }}
              >
                Code Verification
              </Text>
              <Text>
                Enter the 4 digit code that was sent to your mail:
                toluwa@gmail.com
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 30,
                }}
              >
                <TextInput
                  style={{
                    backgroundColor: "#F7F6FA",
                    width: 50,
                    height: 50,
                    borderRadius: 10,
                  }}
                />
                <TextInput
                  style={{
                    backgroundColor: "#F7F6FA",
                    width: 50,
                    height: 50,
                    borderRadius: 10,
                  }}
                />
                <TextInput
                  style={{
                    backgroundColor: "#F7F6FA",
                    width: 50,
                    height: 50,
                    borderRadius: 10,
                  }}
                />
                <TextInput
                  style={{
                    backgroundColor: "#F7F6FA",
                    width: 50,
                    height: 50,
                    borderRadius: 10,
                  }}
                />
              </View>
              <Button
                title='Verify'
                color={"#ffc533"}
                onPress={() => setCurrentModal(currentModal + 1)}
              />
            </View>
          </View>
        </Modal>
      )}
      {currentModal === 3 && (
        <Modal visible={modalVisibility} animationType='slide'>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent} {...panResponder.panHandlers}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  alignSelf: "center",
                }}
              >
                Reset Password
              </Text>
              <Text>
                Enter the 4 digit code that was sent to your mail:
                toluwa@gmail.com
              </Text>

              <TextInput
                style={styles.InputText}
                onChangeText={setUserName}
                value={userName}
                placeholder='New Password'
              />
              <TextInput
                style={styles.InputText}
                onChangeText={setUserName}
                value={userName}
                placeholder='Confirm Password'
              />

              <Button
                title='Reset Password'
                onPress={() => navigation.navigate("Root")}
              />
            </View>
          </View>
        </Modal>
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 45,
  },
  InputText: {
    padding: 10,
    borderColor: "#5b5a5f",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 35,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderColor: "#5b5a5f",
    borderWidth: 1,
    borderRadius: 5,
  },
  passwordInput: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    justifyContent: "space-between",
    width: "100%",
    height: "40%",
    padding: 20,
  },
});
export default Login;
