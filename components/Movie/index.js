import React from "react";
import { Text, View, TouchableOpacity, Image, Dimensions } from "react-native";

import { SimpleLineIcons, Ionicons } from "@expo/vector-icons";
import { SharedElement } from "react-navigation-shared-element";

import styles from "./styles";

const { width } = Dimensions.get("screen");
const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = ITEM_WIDTH * 0.9;

const Movie = ({ item, navigation }) => {
  return (
    <View key={item.imdb_link}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ marginBottom: 14 }}
        onPress={() => navigation.navigate("DetailScreen", { item })}
      >
        <SharedElement id={`item.${item.imdb_link}.image_url`}>
          <Image
            style={{
              borderRadius: 14,
              width: ITEM_WIDTH,
              height: ITEM_HEIGHT,
            }}
            source={{ uri: item.imdb_image_url }}
            resizeMode="cover"
          />
        </SharedElement>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            backgroundColor: "#000",
            opacity: 0.8,
            width: "100%",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            {/* Icon */}
            <SharedElement id={`item.${item.imdb_link}.iconName`}>
              <SimpleLineIcons size={40} color="white" name="location-pin" />
            </SharedElement>
            <View
              style={{
                flexDirection: "column",
                paddingLeft: 6,
              }}
            >
              {/* Title */}
              <SharedElement id={`item.${item.imdb_link}.title`}>
                <Text
                  style={{
                    color: "white",
                    fontSize: 24,
                    fontWeight: "bold",
                    lineHeight: 28,
                  }}
                >
                  {item.imdb_title}
                </Text>
              </SharedElement>

              <SharedElement
                id={`item.${item.imdb_link}.rating`}
                style={styles.rating}
              >
                <Text style={styles.textRating}>
                  <Ionicons name="star" size={20} color="yellow" />
                  {item.imdb_user_rating}/10
                </Text>
              </SharedElement>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Movie;
