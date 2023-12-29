// Layout.js
import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Sidebar from './Sidebar';
import Header from './Header';
import Constants from 'expo-constants';//to obtain the height of the status bar, including any notch or other screen features on the device

const Layout = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
    <View style={styles.container}>
      <Header />
      <Sidebar />
      <View style={styles.content}>{children}</View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // Change 'row' to 'column'
  },
  content: {
    flex: 1,
    padding: 16,
  },
});

export default Layout;
