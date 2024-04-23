import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favorites from "./screens/Favorites";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/AntDesign";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{}}>
        <Tab.Screen
          name="Favorites"
          options={{
            title: "",
            headerStyle: { backgroundColor: "#FFEFCD" },
            tabBarIcon: () => (
              <Icon name="heart-outline" size={30} style={{ paddingTop: 9 }} />
            ),
          }}
          component={Favorites}
        />


      </Tab.Navigator>
    </NavigationContainer>
  );
}
