/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import Raven from 'raven-js';
require('raven-js/plugins/react-native')(Raven);

Raven
  .config('https://7ebdf72f31d04bb098449edbec38f434@sentry.io/133226', { release: '1.0.1' })
  .install();

export default class SentryIoTestApplication extends Component {

  constructor(props) {
    super(props);

    this.crashApplication = this.crashApplication.bind(this);
    this.delegateToCrashFunction = this.delegateToCrashFunction.bind(this);
  }

  crashApplication() {
    if (test.bleh) {}
  }

  delegateToCrashFunction() {
    this.crashApplication();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <TouchableHighlight
          onPress={this.delegateToCrashFunction}
        >
          <Text>Crash Application</Text>
        </TouchableHighlight>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SentryIoTestApplication', () => SentryIoTestApplication);
