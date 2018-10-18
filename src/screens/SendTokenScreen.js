import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class SendTokenScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Send Token</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});