import { StyleSheet } from "react-native";
import theme from "./theme";

export default function createStyles() {
  const colors = theme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundColor,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return styles;
}
