import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Ionicons, 
} from "@expo/vector-icons";

function Home() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainTitle}>
        <Text style={styles.titleText}>DASHBOARD</Text>
      </View>

      <View style={styles.mainCards}>
        <View style={styles.card}>
          <View style={styles.cardInner}>
            <Text style={styles.cardText}>Stock</Text>
            <Ionicons name="md-grid" size={24} color="black" style={styles.cardIcon} />
          </View>
          <Text style={styles.cardValue}>1000</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.cardInner}>
            <Text style={styles.cardText}>News</Text>
            <Ionicons name="md-mail" size={24} color="black" style={styles.cardIcon} />
          </View>
          <Text style={styles.cardValue}>10</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.cardInner}>
            <Text style={styles.cardText}>Charts</Text>
            <Ionicons name="md-stats-chart" size={24} color="black" style={styles.cardIcon} />
          </View>
          <Text style={styles.cardValue}>5</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.cardInner}>
            <Text style={styles.cardText}>Settings</Text>
            <Ionicons name="md-settings" size={24} color="black" style={styles.cardIcon} />
          </View>
          <Text style={styles.cardValue}>2</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 16,
    marginLeft:200,
    marginTop:80,
  },
  mainTitle: {
    marginBottom: 16,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  mainCards: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    margin: 8,
    alignItems: "center",
  },
  cardInner: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 18,
  },
  cardIcon: {
    fontSize: 24,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Home;
