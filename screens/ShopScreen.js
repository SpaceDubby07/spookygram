import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ShopScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>ShopScreen</Text>
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

ShopScreen.navigationOptions = {
  headerTitle: "Shop",
};

export default ShopScreen;
