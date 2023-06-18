import ListeDemandeStyles from "./ListeDemandeStyles";
import AppStyles from "../../AppStyles";
import { Button, Text, View } from "react-native";
import { useEffect } from "react";

export default ListeDemande = ({ navigation, texteRecherche }) => {
  const styles = { ...AppStyles(), ...ListeDemandeStyles() };

  useEffect(() => {
    console.log(texteRecherche);
  }, [texteRecherche]);

  const handleClicAjoutDemande = () => {
    navigation.navigate("FormulaireDemande");
  };

  return (
    <View style={[styles.container, styles.centered]}>
      <Text>Liste des demandes</Text>
      <Button onPress={handleClicAjoutDemande} title="Ajout demande"></Button>
    </View>
  );
};
