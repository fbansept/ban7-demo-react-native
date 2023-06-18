import ConnexionStyles from "./ConnexionStyles";
import AppStyles from "../../AppStyles";
import { Button, View } from "react-native";

export default ({ handleLogin }) => {
  const styles = { ...AppStyles(), ...ConnexionStyles() };

  return (
    <View style={[styles.container, styles.centered, styles.safeArea]}>
      <Button onPress={handleLogin} title="CONNEXION"></Button>
    </View>
  );
};
