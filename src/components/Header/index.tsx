import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome5 } from "@expo/vector-icons";
import React from 'react'

export default function Header() {
  return (
    <View style={styles.header}>
        <View style={styles.header__content}>
          <Text style={styles.header__text}>Hello Nadia,</Text>
          <View style={styles.header__icon__content}>
            <FontAwesome5
              style={styles.header__icon}
              name="heart"
              size={24}
              color="black"
            />
            <FontAwesome5
              style={styles.header__icon}
              name="bell"
              size={24}
              color="black"
            />
          </View>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 0.15,
    justifyContent: 'flex-end',
    marginBottom: 25
  },
  header__text: {
    fontSize: 25,
    fontWeight: "400",
  },
  header__content: {
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header__icon__content: {
    flexDirection: "row",
    gap: 20,
  },
  header__icon: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
})