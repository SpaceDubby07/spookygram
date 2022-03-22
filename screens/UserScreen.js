import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UserScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>UserScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

UserScreen.navigationOptions = {
  headerTitle: "Username",
};

export default UserScreen;
