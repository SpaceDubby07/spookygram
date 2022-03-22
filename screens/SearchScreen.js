import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SearchScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>SearchScreen</Text>
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

SearchScreen.navigationOptions = {
  headerTitle: "Search",
};

export default SearchScreen;
