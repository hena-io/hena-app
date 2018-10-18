import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class ReceiveTokenScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Receive Token</Text>
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