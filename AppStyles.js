import { StyleSheet } from "react-native";
import theme from "./theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function createStyles() {
  const colors = theme();
  const insets = useSafeAreaInsets();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundColor,
    },
    safeArea: {
      paddingTop: insets.top,
      paddingLeft: insets.left,
      paddingBottom: insets.bottom,
      paddingRight: insets.right
    },
    centered: {
      alignItems: "center",
      justifyContent: "center"
    }
  });

  return styles;
}
