import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import WalletNavigator from './WalletNavigator';
import SettingsNavigator from './SettingsNavigator';

const HomeNavigator = createBottomTabNavigator({
    Wallet: {
        screen: WalletNavigator,
        title: 'Wallet',
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
                <TabBarIcon name={'ios-wallet'} color={tintColor}/>
            )
        })
    },
    Settings: {
        screen: SettingsNavigator,
        title: 'Settings',
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
                <TabBarIcon name={'ios-settings'} color={tintColor}/>
            )
        })
    }
}, {
    initialRouteName: 'Wallet',
});

export default HomeNavigator;