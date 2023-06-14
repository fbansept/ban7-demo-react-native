import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Button, View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import ListeDemande from "./screens/ListeDemande/ListeDemande";
import Cgu from "./screens/Cgu/Cgu";
import Login from "./screens/Login/Login";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  const CustomDrawerContent = (props) => {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Deconnexion" onPress={() => handleLogout()} />
      </DrawerContentScrollView>
    );
  };

  const AppNavigator = () => {
    return (
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Liste de remarques" component={ListeDemande} />
        <Drawer.Screen name="CGU" component={Cgu} />
      </Drawer.Navigator>
    );
  };

  //Par la suite ce composant sera un Stack navigator comportant tous les écrans
  //destinés à la connexion / inscription / mot de passe oublié / OAuth2 ....
  const LoginNavigator = () => {
    return <Login handleLogin={handleLogin}></Login>;
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
