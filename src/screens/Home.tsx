import { FlatList, StyleSheet, Text, View } from "react-native";

import PagerView from "react-native-pager-view";
import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";

const faces = [
  {
    id: 1,
    imageUrl: "https://avatars.githubusercontent.com/u/11941409?v=3",
  },
  {
    id: 2,
    imageUrl: "https://avatars.githubusercontent.com/u/11949709?v=4",
  },
  {
    id: 3,
    imageUrl: "https://avatars.githubusercontent.com/u/11949809?v=4",
  },
  {
    id: 4,
    imageUrl: "https://avatars.githubusercontent.com/u/11949919?v=4",
  },
  {
    id: 5,
    imageUrl: "https://avatars.githubusercontent.com/u/11949949?v=4",
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />

      {/* Main */}
      <View style={styles.main}>
        <View style={styles.main__content}>
          <Text style={styles.main__content_title}>Upcoming Appointment</Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={faces}
          renderItem={({ item }) => <Card src={item.imageUrl} />}
          pagingEnabled
          snapToAlignment="center"
        />
        <View style={styles.footer}>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
  },
  main__content: {
    paddingHorizontal: 15,
  },
  main__content_title: {
    fontSize: 20,
  },
  slider: {
    flex: 1,
  },
  slider__content: {
    flex: 1,
  },
  footer: {
    backgroundColor: 'green',
    flex: 15
  }
});
