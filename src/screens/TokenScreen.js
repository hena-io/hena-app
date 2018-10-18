import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';

const TxsButton = ({ title, onPress }) => (
    <Button
        title={title}
        containerViewStyle={{
            flex: 1,
        }}
        buttonStyle={{
            borderRadius: 6
        }}
        onPress={onPress}
    />
);

export default class TokenScreen extends Component {
    _onSendToken = () => {
        this.props.navigation.navigate('Send');
    };

    _onReceiveToken = () => {
        this.props.navigation.navigate('Receive');
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.token}>
                    <View style={{
                        height:150,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text style={styles.tokenName}>Ethereum</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.tokenBalance}>0</Text>
                            <Text style={[styles.tokenSymbol, {marginLeft: 5}]}>ETH</Text>
                        </View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <TxsButton title={'Send'} onPress={this._onSendToken} />
                        <TxsButton title={'Receive'} onPress={this._onReceiveToken} />
                    </View>
                </View>
                <View style={styles.transactions}>
                    <Text>Transactions</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    token: {
        height: 200,
        backgroundColor: '#FFF'
    },
    tokenName: {
        fontSize: 26
    },
    tokenBalance: {
        fontSize: 20
    },
    tokenSymbol: {
        fontSize: 20
    },
    button: {
        flex: 1,
    },
    transactions: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    }
});