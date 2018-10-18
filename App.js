/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, YellowBox } from 'react-native';

import MainNavigator from './src/navigations/MainNavigator';
import IntroScreen from './src/screens/IntroScreen';
import HomeNavigator from './src/navigations/HomeNavigator';
import WalletNavigator from './src/navigations/WalletNavigator';

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated in plain JavaScript React classes.'
]);

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});