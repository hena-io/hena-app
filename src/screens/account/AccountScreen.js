import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class AccountScreen extends Component {
    _onCreateAccount = () => {
        this.props.navigation.navigate('Create');
    };

    _onImportAccount = () => {
        this.props.navigation.navigate('Import');
    };

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title={'CREATE ACCOUNT'}
                    onPress={this._onCreateAccount}
                    buttonStyle={styles.button}
                    
                />
                <Button
                    title={'IMPORT ACCOUNT'}
                    buttonStyle={styles.button}
                    onPress={this._onImportAccount}
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