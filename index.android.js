import {AppRegistry} from 'react-native';

window.isNative = true;
window.platform = 'android';

import {SelectApp} from './select-app';
AppRegistry.registerComponent('SiftrNative', () => SelectApp);
