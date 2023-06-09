import { StatusBar } from "expo-status-bar";
import AppStyles from "./AppStyles";

export default function App() {
  const styles = AppStyles();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      setIsLoggedIn(true);
      console.log("Connexion réussie !");
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const AppNavigator = () => {
    return <Text>Navigation Login</Text>;
  };

  const LoginNavigator = () => {
    return <Text>Navigation Application</Text>;
  };

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      {isLoggedIn ? <AppNavigator /> : <LoginNavigator />}
    </NavigationContainer>
  );
}
