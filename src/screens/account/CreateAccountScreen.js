import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class CreateAccountScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Create Account</Text>
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