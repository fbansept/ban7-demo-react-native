import { useColorScheme } from "react-native";

const colors = {
  primary: "#467386",
  accent: "#D5A26A",
  warn: "#A7373F",
  white: "#fff",
  black: "#000",
  grey: "#f2f2f2",
};

const themeColors = {
  light: {
    backgroundColor: colors.white,
    textColor: colors.black,
  },
  dark: {
    backgroundColor: "#222",
    textColor: colors.white,
  },
};

export default () => {
  const colors = themeColors[useColorScheme()];
  return { ...colors, ...themeColors };
};
