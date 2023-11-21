import { StyleSheet } from "react-native";
import { View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import CartScreen from "./src/screens/CartScreen";
import FavoriteScreen from "./src/screens/FavoriteScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import ItemScreen from "./src/screens/ItemScreen";
import { Ionicons, FontAwesome5, AntDesign } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import PaymentMethod from "./src/screens/profile_screens/PaymentMethod";
import PromoCode from "./src/screens/profile_screens/PromoCode";
import Settings from "./src/screens/profile_screens/Settings";
import Address from "./src/screens/profile_screens/Address";
import MyReview from "./src/screens/profile_screens/MyReview";
import Reviews from "./src/screens/Reviews";
import PaymentScreen from "./src/screens/profile_screens/PaymentScreen";
import Login from "./src/screens/LoginScreen";
import SignUp from "./src/screens/SignupScreen";
import HeaderButton from "./src/components/HeaderButton";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Root = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#ffffff", paddingVertical: 5 },
        tabBarLabelStyle: { fontSize: 12, marginBottom: 5 },
        tabBarInactiveTintColor: "#f1eef9",
        tabBarActiveTintColor: "#ffc533",
      }}
    >
      <Tab.Screen
        name={"Home"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              size={24}
              color={focused ? "#ffc533" : "#f1eef9"}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={"Favourite"}
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name={focused ? "heart" : "hearto"}
              size={24}
              color={focused ? "#ffc533" : "#f1eef9"}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"Reviews"}
        component={Reviews}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name={focused ? "pluscircleo" : "pluscircleo"}
              size={24}
              color={focused ? "white" : "#f1eef9"}
            />
          ),
          tabBarButton: (props) => (
            <View
              style={{
                top: -20,
                justifyContent: "center",
                alignItems: "center",
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: "#ffc533",
                shadowColor: "#000000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}
            >
              <TouchableOpacity
                {...props}
                style={{
                  width: "100%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
            </View>
          ),
          tabBarLabel: () => null,
          headerLeft: () => (
            <AntDesign name='arrowleft' size={24} color='#ffc533' />
          ),
          headerLeftContainerStyle: {
            backgroundColor: "white",
            alignItems: "center",
            padding: 5,
            marginLeft: 10,
            borderRadius: 10,
            width: 50,
          },
        }}
      />
      <Tab.Screen
        name={"Cart"}
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "cart" : "cart-outline"}
              size={24}
              color={focused ? "#ffc533" : "#f1eef9"}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"Profile"}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name={focused ? "user-alt" : "user"}
              size={25}
              color={focused ? "#ffc533" : "#f1eef9"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            headerStyle: {
              backgroundColor: "transparent",
              elevation: 0,
            },
            headerLeft: () => (
              <HeaderButton
                button={"Log In"}
                location={"Login"}
                side={"Login"}
              />
            ),
            headerRight: () => (
              <HeaderButton
                button={"Sign Up"}
                location={"Signup"}
                side={"Login"}
              />
            ),
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name='Signup'
          component={SignUp}
          options={{
            headerStyle: {
              backgroundColor: "transparent",
              elevation: 0,
            },
            headerLeft: () => (
              <HeaderButton
                button={"Log In"}
                location={"Login"}
                side={"Signup"}
              />
            ),
            headerRight: () => (
              <HeaderButton
                button={"Sign Up"}
                location={"Signup"}
                side={"Signup"}
              />
            ),
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name='Root'
          component={Root}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='ItemScreen'
          component={ItemScreen}
          options={{
            headerStyle: {
              backgroundColor: "transparent",
              shadowOpacity: 0,
              elevation: 0,
            },
            headerRight: () => (
              <AntDesign name='hearto' size={24} color='#ffc533' />
            ),
            headerLeft: () => (
              <AntDesign name='arrowleft' size={24} color='#ffc533' />
            ),
            headerLeftContainerStyle: {
              backgroundColor: "white",
              alignItems: "center",
              padding: 5,
              marginLeft: 20,
              borderRadius: 10,
              width: 50,
            },
            headerRightContainerStyle: {
              backgroundColor: "white",
              alignItems: "center",
              marginRight: 10,
              marginLeft: 95,
              borderRadius: 10,
            },
          }}
        />
        <Stack.Group>
          <Stack.Screen name='MyReview' component={MyReview} />
          <Stack.Screen name='Address' component={Address} />
          <Stack.Screen name='PaymentMethod' component={PaymentMethod} />
          <Stack.Screen name='PromoCode' component={PromoCode} />
          <Stack.Screen name='Settings' component={Settings} />
        </Stack.Group>
        <Stack.Screen name='PaymentScreen' component={PaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
