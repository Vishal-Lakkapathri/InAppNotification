/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Picker,
  AppState,
  Alert,
  Button
} from 'react-native';
import Noti from './notification.js'
import PushNotification from 'react-native-push-notification'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

export default class App extends Component {

  constructor() {
    super()
    this.state = { seconds: 5 }
    this.handleAppStateChange = this.handleAppStateChange.bind(this);
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillMount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange = (AppState) => {
    let date
    console.log(date, 'DATE')
    AppState === "background" ? PushNotification.localNotificationSchedule({
      message: "Please Click Me",
      date: new Date(Date.now() + (this.state.seconds * 1000))
    }) : console.log('ForeGround')
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Please select the time in Seconds</Text>
        <Picker style={styles.picker}
          selectedValue={this.state.seconds}
          onValueChange={(seconds) => this.setState({ seconds })}
        >
          <Picker.Item label="5" value={5} />
          <Picker.Item label="10" value={10} />
          <Picker.Item label="15" value={15} />
        </Picker>
        <Noti seconds={this.state.seconds}></Noti>
        <View>
          <Text style={styles.welcome}>Please Click the below button for In-App Notification</Text>
          <Button
            title="INAPP"
            color="#FC5304"
            onPress={() => setTimeout(function() {Alert.alert('Alert Msg', alertMessage = "In App Notification")}, 5000)}>
        </Button>
        </View>
      </View>
    );
  }
}

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
  picker: {
    width: 100,
  }
});
