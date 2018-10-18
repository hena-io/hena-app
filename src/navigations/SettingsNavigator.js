import { createStackNavigator } from 'react-navigation';

import SettingsScreen from '../screens/SettingsScreen';

export default SettingsStack = createStackNavigator({
    Home: {
        screen: SettingsScreen,
        navigationOptions: () => ({
            title: 'Settings'
        })
    }
}, {
    initialRouteName: 'Home'
});