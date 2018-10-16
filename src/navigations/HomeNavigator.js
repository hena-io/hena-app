import { createBottomTabNavigator } from 'react-navigation';

import WalletScreen from '../screens/WalletScreen';
import SettingsScreen from '../screens/SettingsScreen';

export default createBottomTabNavigator({
    Wallet: {
        screen: WalletScreen,
        title: 'Wallet',
    },
    Settings: {
        screen: SettingsScreen,
        title: 'Settings'
    }
});