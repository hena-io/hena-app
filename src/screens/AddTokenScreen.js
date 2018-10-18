import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class AddTokenScreren extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Add Token</Text>
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