import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';

export default class IntroScreen extends Component {
    _onEnter = () => {
        this.props.navigation.navigate("Account");

    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.container}
                    onPress={this._onEnter}
                >
                    <Text h1>Hena</Text>
                </TouchableOpacity>
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