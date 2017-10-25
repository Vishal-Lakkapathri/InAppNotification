import  React, { Component } from 'react';
import { View, Text } from 'react-native'
import PushNotification  from 'react-native-push-notification'

export default class Noti extends Component {

    componentDidMount(){
        PushNotification.configure({
            onNotification: function(notification) {
                console.log( 'NOTIFICATION:', notification );
            },
        })
    }

    render(){
        return(
            <View>
                <Text>Selected {this.props.seconds}</Text>
                
            </View>
        )
    }
}