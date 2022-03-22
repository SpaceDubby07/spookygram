import React from "react";
import Card from "../components/Card";
import { FlatList, View, StyleSheet } from "react-native";
import { POST } from "../data/dummyData";
import colors from "../constants/Colors";

const MainScreen = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={POST}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
          console.log(itemData);
          return (
            <Card
              username={itemData.item.username}
              image={itemData.item.image}
              likes={itemData.item.likes}
              description={itemData.item.description}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    height: "100%",
    flex: 1,
  },
});

MainScreen.navigationOptions = {
  headerTitle: "Spookygram",
};

export default MainScreen;
