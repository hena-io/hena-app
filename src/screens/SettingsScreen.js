import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import TabBarIcon from '../components/TabBarIcon';

export default class SettingsScreen extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <TabBarIcon name={'settings'} color={tintColor}/>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Settings</Text>
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