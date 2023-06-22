import ConnexionStyles from "./ConnexionStyles";
import AppStyles from "../../AppStyles";
import { Button, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default ({ handleLogin }) => {
  const styles = { ...AppStyles(), ...ConnexionStyles() };

  const navigation = useNavigation();

  return (
    <View style={[styles.container, styles.centered, styles.safeArea]}>
      <Button onPress={handleLogin} title="CONNEXION"></Button>
      <Button
        onPress={() => navigation.navigate("Inscription")}
        title="Inscription"
      ></Button>
    </View>
  );
};
