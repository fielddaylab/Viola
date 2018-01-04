import {AppRegistry} from 'react-native';

window.isNative = true;
window.platform = 'ios';

import {SelectApp} from './select-app';
AppRegistry.registerComponent('SiftrNative', () => SelectApp);
