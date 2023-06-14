import React from "react";
import { View, Button, Text, SafeAreaView } from "react-native";
import LoginStyles from "./LoginStyles";
import AppStyles from "./../../AppStyles";

const Login = ({ handleLogin }) => {
  const styles = { ...AppStyles(), ...LoginStyles() };

  return (
    <View style={[styles.container, styles.centered, styles.safeArea]}>
      <Button onPress={handleLogin} title="CONNEXION"></Button>
    </View>
  );
};

export default Login;
