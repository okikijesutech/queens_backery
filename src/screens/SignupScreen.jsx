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
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";

const Login = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [agree, setAgree] = useState(false);

  const navigation = useNavigation();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView>
          <TextInput
            style={styles.InputText}
            onChangeText={setName}
            value={name}
            placeholder='Name'
          />
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
              marginBottom: 60,
              marginTop: 15,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <CheckBox
              checked={agree}
              onPress={() => setAgree(!agree)}
              containerStyle={{ marginRight: 0 }}
              checkedColor='#ffc533'
              uncheckedColor='#5b5a5f'
            />
            <Text> I agree to the Terms and Conditions</Text>
          </View>

          <Button
            title='Create Account'
            color='#ffc533'
            onPress={() => navigation.navigate("Root")}
          />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    paddingHorizontal: 16,
  },
  InputText: {
    padding: 10,
    borderColor: "#5b5a5f",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 45,
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
});
export default Login;
