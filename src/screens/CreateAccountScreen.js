import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';

export default class CreateAccountScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    buttonStyle={styles.button}
                    title={'CREATE ACCOUNT'}
                />
                <Button
                    buttonStyle={styles.button}
                    title={'IMPORT ACCOUNT'}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: 200,
        margin: 10
    }
});