import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from "expo-constants";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text selectable style={styles.text}>{JSON.stringify(Constants, null, 4)}</Text>
        <StatusBar style="inverted" animated backgroundColor="#282c34" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: "#282c34",
  },
  text: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 10
  }
});
