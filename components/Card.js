import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";

const Card = (props) => {
  const [isLike, setIsLike] = useState(false);
  const [isBookmark, setIsBookmark] = useState(false);

  const toggleLike = () => {
    setIsLike(!isLike);
  };
  const toggleBookmark = () => {
    setIsBookmark(!isBookmark);
  };

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <TouchableOpacity style={styles.userTouchable}>
          <Image style={styles.tinyImage} source={{ uri: props.image }} />
        </TouchableOpacity>
        <Text style={styles.usernameText}>{props.username}</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: props.image }} />
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            toggleLike();
          }}
        >
          {!isLike ? (
            <Ionicons
              name="ios-heart-outline"
              size={30}
              color={Colors.primary}
            />
          ) : (
            <Ionicons name="ios-heart" size={30} color={Colors.primary} />
          )}
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon} onPress={() => {}}>
          <Ionicons
            name="ios-chatbubbles-outline"
            size={30}
            color={Colors.primary}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={() => {}}>
          <Ionicons
            name="md-share-social-outline"
            size={30}
            color={Colors.primary}
          />
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity
            style={styles.icon}
            onPress={() => {
              toggleBookmark();
            }}
          >
            {!isBookmark ? (
              <Ionicons
                name="ios-bookmark-outline"
                size={30}
                color={Colors.primary}
              />
            ) : (
              <Ionicons name="ios-bookmark" size={30} color={Colors.primary} />
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.textContainer}>
        {!isLike ? (
          <Text style={styles.text}>{props.likes} likes</Text>
        ) : (
          <Text style={styles.text}>{props.likes + 1} likes</Text>
        )}
        <Text style={styles.text}>{props.username}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  userTouchable: {
    marginVertical: 10,
    marginHorizontal: 5,
    borderColor: Colors.primary,
    borderWidth: 2,
    borderRadius: 180,
    overflow: "hidden",
  },
  tinyImage: {
    height: 30,
    width: 30,
    borderRadius: 180,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  usernameText: {
    fontFamily: "mer-bold",
    fontSize: 16,
    color: Colors.primary,
    padding: 10,
  },
  iconContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  icon: {
    paddingHorizontal: 10,
  },
  image: {
    height: 300,
    width: "100%",
  },
  textContainer: {
    marginTop: 10,
  },
  text: {
    fontFamily: "mer-reg",
    color: Colors.primary,
    paddingLeft: 10,
  },
  description: {
    fontFamily: "mer-reg",
    color: Colors.primary,
    paddingLeft: 20,
  },
});

export default Card;
