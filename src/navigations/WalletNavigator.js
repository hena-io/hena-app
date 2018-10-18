import { createStackNavigator } from 'react-navigation';

import WalletScreen from '../screens/WalletScreen';
import TokenScreen from '../screens/TokenScreen';
import SendTokenScreen from '../screens/SendTokenScreen';
import ReceiveTokenScreen from '../screens/ReceiveTokenScreen';
import AddTokenScreen from '../screens/AddTokenScreen';

export default WalletStack = createStackNavigator({
    Wallet: {
        screen: WalletScreen,
        navigationOptions: () => ({
            title: 'Wallet',
        })
    },
    Token: {
        screen: TokenScreen,
        navigationOptions: () => ({
            title: 'Token'
        })
    },
    Send: {
        screen: SendTokenScreen,
        navigationOptions: () => ({
            title: 'Send'
        })
    },
    Receive: {
        screen: ReceiveTokenScreen,
        navigationOptions: () => ({
            title: 'Receive'
        })
    },
    Add: {
        screen: AddTokenScreen,
        navigationOptions: () => ({
            title: 'Add Token'
        })
    }
}, {
    initialRouteName: 'Wallet',
});