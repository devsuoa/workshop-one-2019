import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {TestComponent} from './testComponent';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <TestComponent name={'Nik'} age={20}/>
        <TestComponent name={'Sean'} age={12}/>
        <TestComponent name={'Ben'} age={40}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
