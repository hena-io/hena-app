import { createStackNavigator } from 'react-navigation';

import IntroScreen from '../screens/IntroScreen';
import AccountNavigator from './AccontNavigator';
import HomeNavigator from './HomeNavigator';

export default createStackNavigator({
    Intro: {
        screen: IntroScreen
    },
    Account: {
        screen: AccountNavigator
    },
    Home: {
        screen: HomeNavigator
    }
}, {
    initialRouteName: 'Intro',
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    },
});