import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { useContext, useEffect, useRef, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  DrawerContentScrollView,
  DrawerItem,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import FormulaireDemande from "./screens/FormulaireDemande/FormulaireDemande";
import Cgu from "./screens/Cgu/Cgu";
import Connexion from "./screens/Connexion/Connexion";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { Header, Icon, SearchBar } from "@rneui/themed";
import AppStyles from "./AppStyles";
import ListeDemande from "./screens/ListeDemande/ListeDemande";
import Inscription from "./screens/Inscription/Inscription";

export default () => {
  const App = () => {
    const styles = AppStyles();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [texteRecherche, setTexteRecherche] = useState("");

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

    const Stack = createStackNavigator();

    const CustomListDemande = ({ navigation }) => (
      <ListeDemande
        texteRecherche={texteRecherche}
        navigation={navigation}
      ></ListeDemande>
    );

    const StackDemande = () => {
      return (
        <Stack.Navigator>
          <Stack.Screen
            name="ListeDemande"
            component={CustomListDemande}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FormulaireDemande"
            component={FormulaireDemande}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      );
    };

    const Drawer = createDrawerNavigator();

    const CustomDrawerContent = (props) => {
      const { navigation } = props;
      return (
        <DrawerContentScrollView {...props}>
          <DrawerItem
            label="Liste de remarques"
            onPress={() => {
              navigation.navigate("ListeDemande");
            }}
          />
          <DrawerItem label="CGU" onPress={() => navigation.navigate("CGU")} />
          <DrawerItem label="Deconnexion" onPress={() => handleLogout()} />
        </DrawerContentScrollView>
      );
    };

    const BarreDeRecherche = ({
      texteRechercheInitiale,
      setTexteRecherche,
    }) => {
      const [texte, setTexte] = useState(texteRechercheInitiale);

      return (
        <SearchBar
          placeholder="Recherche..."
          cancelButtonTitle=""
          onChangeText={(text) => setTexte(text)}
          onSubmitEditing={(event) => {
            setTexteRecherche(event.nativeEvent.text);
          }}
          value={texte}
          containerStyle={styles.searchBarContainer}
          inputContainerStyle={{ backgroundColor: "transparent" }}
        />
      );
    };

    // ...

    const EnTeteMenuRecherche = ({
      navigation,
      texteRecherche,
      setTexteRecherche,
    }) => {
      return (
        <Header
          leftComponent={
            <Icon name="menu" onPress={() => navigation.openDrawer()} />
          }
          centerComponent={
            <BarreDeRecherche
              texteRechercheInitiale={texteRecherche}
              setTexteRecherche={setTexteRecherche}
            />
          }
          containerStyle={{
            backgroundColor: "transparent",
          }}
        />
      );
    };

    const AppNavigator = () => {
      return (
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen
            name="StackDemande"
            component={StackDemande}
            options={{
              headerShown: true,
              header: (props) => (
                <EnTeteMenuRecherche
                  {...props}
                  texteRecherche={texteRecherche}
                  setTexteRecherche={setTexteRecherche}
                />
              ),
            }}
          />
          <Drawer.Screen name="CGU" component={Cgu} />
        </Drawer.Navigator>
      );
    };

    const CustomConnexion = () => (
      <Connexion handleLogin={handleLogin}></Connexion>
    );

    const StackAuthentification = () => {
      return (
        <Stack.Navigator>
          <Stack.Screen
            name="Connexion"
            component={CustomConnexion}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Inscription"
            component={Inscription}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      );
    };

    return isLoggedIn ? <AppNavigator /> : <StackAuthentification />;
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <App></App>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
