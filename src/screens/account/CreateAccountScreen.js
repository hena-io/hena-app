import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import bip39 from 'react-native-bip39';

export default class CreateAccountScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mnemonic: ''
        };
    }

    componentWillMount() {
        bip39.generateMnemonic(256)
            .then(mnemonic => this.setState({ mnemonic: mnemonic }));
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Create Account</Text>
                <Text>{this.state.mnemonic}</Text>
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