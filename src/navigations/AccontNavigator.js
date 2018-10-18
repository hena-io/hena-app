import { createStackNavigator } from 'react-navigation';

import CreateAccountScreen from '../screens/CreateAccountScreen';

export default createStackNavigator({
    Create: {
        screen: CreateAccountScreen
    }
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false
    }
});