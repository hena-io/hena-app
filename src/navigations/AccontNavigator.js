import { createStackNavigator } from 'react-navigation';

import AccountScreen from '../screens/account/AccountScreen';
import CreateAccountScreen from '../screens/account/CreateAccountScreen';
import ImportAccountScreen from '../screens/account/ImportAccountScreen';

export default createStackNavigator({
    Home: {
        screen: AccountScreen
    },
    Create: {
        screen: CreateAccountScreen
    },
    Import: {
        screen: ImportAccountScreen
    }
},
{
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false
    }
});