import { StatusBar } from "expo-status-bar";
import AppStyles from "./AppStyles";
import { useState } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList
} from "@react-navigation/drawer";
import Login from "./screens/Login/Login";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  const handleLogin = async () => {
    try {
      setIsLoggedIn(true);
      console.log("Connexion réussie !");
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  //Par la suite ce composant sera un Drawer navigator comportant tous les écrans
  //de l'application accessible par le menu. (Liste des demande, CGU ...)
  const AppNavigator = () => {
    return <Text>Navigation Application</Text>;
  };

  //Par la suite ce composant sera un Stack navigator comportant tous les écrans
  //destinés à la connexion / inscription / mot de passe oublié / OAuth2 ....
  const LoginNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="LoginPage"
          component={Login}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        {isLoggedIn ? <AppNavigator /> : <LoginNavigator />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
