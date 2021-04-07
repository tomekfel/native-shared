import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import * as Animatable from "react-native-animatable";
import {
  SimpleLineIcons,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";

import styles from "./styles";

const { height } = Dimensions.get("window");
const ITEM_HEIGHT = height * 0.5;

const DetailScreen = ({ navigation, route }) => {
  const { item } = route.params;
  const buttonRef = React.useRef();

  return (
    <View style={{ flex: 1, backgroundColor: "#0f0f0f" }}>
      <SharedElement id={`item.${item.imdb_link}.image_url`}>
        <Image
          source={{ uri: item.imdb_image_url }}
          style={{
            width: "100%",
            height: ITEM_HEIGHT,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
          resizeMode="cover"
        />
      </SharedElement>
      <Animatable.View
        ref={buttonRef}
        animation="fadeIn"
        duration={600}
        delay={300}
        style={[StyleSheet.absoluteFillObject]}
      >
        <MaterialCommunityIcons
          name="close"
          size={28}
          color="#fff"
          style={{
            position: "absolute",
            top: 40,
            right: 20,
            zIndex: 2,
          }}
          onPress={() => {
            buttonRef.current.fadeOut(100).then(() => {
              navigation.goBack();
            });
          }}
        />
      </Animatable.View>
      <View
        style={{ flexDirection: "row", marginTop: 10, paddingHorizontal: 20 }}
      >
        {/* Icon */}
        <SharedElement id={`item.${item.imdb_link}.iconName`}>
          <SimpleLineIcons size={40} color="white" name="location-pin" />
        </SharedElement>

        <View style={{ flexDirection: "column", paddingLeft: 6 }}>
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

          {/* Rating */}
          <SharedElement id={`item.${item.imdb_link}.rating`}>
            <Text style={styles.textRating}>
              <Ionicons name="star" size={20} color="yellow" />
              {item.imdb_user_rating}/10
            </Text>
          </SharedElement>
          {/* Description */}
          <SharedElement id={`item.${item.imdb_link}.description`}>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
                lineHeight: 18,
              }}
            >
              {item.description}
            </Text>
          </SharedElement>
        </View>
      </View>
      <ScrollView
        indicatorStyle="white"
        style={{
          paddingHorizontal: 20,
          backgroundColor: "#0f0f0f",
        }}
        contentContainerStyle={{ paddingVertical: 20 }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "#fff",
            lineHeight: 24,
            marginBottom: 4,
          }}
        >
          {item.imdb_description}
        </Text>
      </ScrollView>
    </View>
  );
};

DetailScreen.sharedElements = (route) => {
  const { item } = route.params;
  return [
    {
      id: `item.${item.imdb_link}.image_url`,
      animation: "move",
      resize: "clip",
    },
    {
      id: `item.${item.imdb_link}.title`,
      animation: "fade",
      resize: "clip",
    },
    {
      id: `item.${item.imdb_link}.rating`,
      animation: "fade",
      resize: "clip",
    },
    {
      id: `item.${item.imdb_link}.description`,
      animation: "fade",
      resize: "clip",
    },
    {
      id: `item.${item.imdb_link}.iconName`,
      animation: "move",
      resize: "clip",
    },
  ];
};

export default DetailScreen;
