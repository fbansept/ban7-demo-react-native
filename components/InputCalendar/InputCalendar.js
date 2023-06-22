import { View } from "react-native";
import AppStyles from "../../AppStyles";
import InputCalendarStyles from "../InputCalendarStyles";
import { Icon, Text } from "@rneui/base";
import { DateTimePickerModal } from "@react-native-community/datetimepicker";
import { useState } from "react";

export const InputCalendar = ({ onChange, value }) => {
  const styles = { ...AppStyles(), ...InputCalendarStyles() };

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  return (
    <>
      <View style={styles.datePicker}>
        <Text style={{ marginRight: 10 }}>
          {value ? value.toLocaleDateString() : ""}
        </Text>
        <Icon
          name="calendar"
          type="font-awesome"
          onPress={() => setDatePickerVisible(true)}
        />
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        date={value}
        onConfirm={(dateSelectionne) => {
          onChange(dateSelectionne);
          setTimeout(() => setDatePickerVisible(false), 0);
        }}
        onCancel={() => setDatePickerVisible(false)}
      />
    </>
  );
};
