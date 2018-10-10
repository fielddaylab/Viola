import {AppRegistry, Platform} from 'react-native';

window.isNative = true;
window.platform = Platform.OS;

import {SelectApp} from './select-app';
AppRegistry.registerComponent('GMiOS', () => SelectApp);
