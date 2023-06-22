import { Controller } from "react-hook-form";
import AppStyles from "../../AppStyles";
import InputTextStyles from "./InputTextStyles";
import { Input } from "@rneui/themed";

export const InputText = ({
  label,
  defaultValue,
  rules,
  errorMessage,
  control,
  errors,
  name,
}) => {
  const styles = { ...AppStyles(), ...InputTextStyles() };

  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input
          onBlur={onBlur}
          onChangeText={(value) => onChange(value)}
          value={value}
          label={label}
          errorStyle={{ color: "red" }}
          errorMessage={errors[name] ? errorMessage : ""}
        />
      )}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
    />
  );
};
