import { View, StyleSheet } from "react-native";
import { useForm } from "react-hook-form";
import { Button } from "@rneui/themed";
import AppStyles from "../../AppStyles";
import FormulaireDemandeStyles from "./FormulaireDemandeStyles";
import { InputText } from "../../components/InputText/InputText";
import { InputSelect } from "../../components/InputSelect/InputSelect";

export default FormulaireDemande = () => {
  const styles = { ...AppStyles(), ...FormulaireDemandeStyles() };

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const choix = [
    { label: "Faible", value: 1 },
    { label: "Moyenne", value: 2 },
    { label: "Importante", value: 3 },
  ];

  return (
    <View style={[styles.container, styles.centered]}>
      <InputText
        control={control}
        errors={errors}
        label="Titre"
        errorMessage="Ce champ est requis"
        rules={{ required: true }}
        name="titre"
      ></InputText>

      <InputSelect
        control={control}
        label="Priorite"
        name="priorite"
        values={choix}
      ></InputSelect>

      <Button title="Envoyer" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};
