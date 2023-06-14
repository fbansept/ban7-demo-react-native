import ListeDemandeStyles from "./ListeDemandeStyles";
import AppStyles from "../../AppStyles";
import { Text, View } from "react-native";

export default () => {
  const styles = { ...AppStyles(), ...ListeDemandeStyles() };

  return (
    <View style={[styles.container, styles.centered]}>
      <Text>Liste des demandes</Text>
    </View>
  );
};
