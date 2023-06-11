import React from "react";
import { View, Button, Text, SafeAreaView } from "react-native";
import LoginStyles from "./LoginStyles";
import AppStyles from "./../../AppStyles";

const Login = ({ handleLogin }) => {

  const styles = { ...AppStyles(), ...LoginStyles() };

  console.log(styles);

  return (
    <View style={styles.container}>
      <Text>khjhhghgjhhgfjff</Text>
    </View>
  );
};

export default Login;
