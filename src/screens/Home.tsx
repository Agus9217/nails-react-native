import { StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";

export default function Home() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.header__content}>
          <Text style={styles.header__text}>Hello Nadia,</Text>
          <View style={styles.icon__content}>
            <FontAwesome5
              style={styles.icon}
              name="heart"
              size={24}
              color="black"
            />
            <FontAwesome5
              style={styles.icon}
              name="bell"
              size={24}
              color="black"
            />
          </View>
        </View>
      </View>

      {/* Main */}
      <View style={styles.main}>
        <View style={styles.main__content}>
          <Text>Upcoming Appointment</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.15,
    justifyContent: 'flex-end',
    marginBottom: 25
  },
  header__text: {
    fontSize: 25,
    fontWeight: "300",
  },
  header__content: {
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon__content: {
    flexDirection: "row",
    gap: 20,
  },
  icon: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  main: {
    flex: 1,
    backgroundColor: "tomato",
  },
  main__content: {},
});
