import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { theme } from './src/theme';

const APP_LOGO = require('./src/assets/logo.png');

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={APP_LOGO} style={{ width: 50, height: 50 }} />
      <Text style={styles.titleStyle}>Welcome to Capital Cohort</Text>
      <Text style={styles.sloganStyle}>
        An exclusive, modern, and intuitive wealth ledger app
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  sloganStyle: {
    color: theme.colors.text,
  },
});
