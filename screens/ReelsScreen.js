import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ReelsScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Reels</Text>
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

ReelsScreen.navigationOptions = {
  headerTitle: "Reels",
};

export default ReelsScreen;
