import React from "react";
import { View, Text, ImageBackground } from "react-native";

import styles from "./styles";

import StyledButton from "../StyledButton";

const CarItem = ({ car }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={car.image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{car.name}</Text>
        <Text style={styles.subtitle}>
          {car.tagline} <Text style={styles.subtitleCTA}>{car.taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content="custom order"
          onPress={() => {
            console.warn("custom order pressed");
          }}
        />
        <StyledButton
          type="secondary"
          content="existing inventory"
          onPress={() => {
            console.warn("existing inventory pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
