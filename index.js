import { AppRegistry } from 'react-native';
import { YellowBox } from 'react-native';
import App from './App';

import './shim';

YellowBox.ignoreWarnings([
    'Warning: isMounted(...) is deprecated in plain JavaScript React classes.'
]);

AppRegistry.registerComponent('HenaApp', () => App);
