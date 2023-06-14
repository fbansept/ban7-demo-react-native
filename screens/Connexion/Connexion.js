import ConnexionStyles from "./ConnexionStyles";
import AppStyles from "../../AppStyles";
import { Text, View } from "react-native";

export default () => {
  const styles = { ...AppStyles(), ...ConnexionStyles() };

  return (
    <View style={[styles.container, styles.centered]}>
      <Text>Connexion</Text>
    </View>
  );
};
