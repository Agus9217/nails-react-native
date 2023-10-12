import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import { Avatar } from "@luanyata/react-native-avatar";
import React from "react";

interface Props {
  src: string;
}

export default function Card({ src }: Props) {
  return (

    <View style={styles.card}>
      <Avatar src={src} rounded={true} size={50} />
      <View style={styles.card__content}>
        <Text style={styles.card__content_title}>Ms Anna Hemsworth</Text>
        <Text>08 May 2023</Text>
        <Text>10:30 AM - French Manicure</Text>
        <Text style={styles.card__start_hour}>Start in 10 min</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 30,
    margin: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    gap: 10,
    backgroundColor: "white",
    alignItems: "center",
  },
  card__content: {},
  card__start_hour: {
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    width: 90,
    textAlign: 'center',
    padding: 4,
    marginVertical: 6
  },
  card__content_title: {
    color: 'gray',
    fontSize: 17,
    fontWeight: '300',
    padding: 4,
  }
});
