import { View, StyleSheet } from "react-native";
import { useForm } from "react-hook-form";
import { Button } from "@rneui/themed";
import InputEmail from "../../components/InputEmail/InputEmail";
import AppStyles from "../../AppStyles";
import InputPassword from "../../components/InputPassword/InputPassword";
import InscriptionStyles from "./InscriptionStyles";

export default Inscription = () => {
  const styles = { ...AppStyles(), ...InscriptionStyles() };

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <View style={styles.container}>
      <InputEmail control={control} errors={errors}></InputEmail>
      <InputPassword control={control} errors={errors}></InputPassword>

      <Button title="Envoyer" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};