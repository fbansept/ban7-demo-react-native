import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import AppStyles from "./AppStyles";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const App = () => {
    const styles = AppStyles();

    return (
      <View style={[styles.container, styles.safeArea, styles.centered]}>
        <Text style={styles.text}>
          Open up App.js to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </View>
    );
  };

  return (
    <SafeAreaProvider>
      <App></App>
    </SafeAreaProvider>
  );
}
