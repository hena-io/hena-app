import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-ionicons';

import TabBarIcon from '../components/TabBarIcon';

export default class WalletScreen extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <TabBarIcon name={'wallet'} color={tintColor}/>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Wallet</Text>
                <Icon name={'add-circle'} />
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