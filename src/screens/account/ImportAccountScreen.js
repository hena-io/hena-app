import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class ImportAccountScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Import Account</Text>
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