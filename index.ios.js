window.isNative = true;
window.platform = 'ios';

import {SiftrNative} from './siftr/src-native/app';
import {HomeScreen} from './nomen/src/app';
import {AppRegistry} from 'react-native';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

class SelectApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      app: null,
    };
  }

  render() {
    switch (this.state.app) {
      case 'siftr':
        return <SiftrNative />;
      case 'nomen':
        return <HomeScreen />;
      default:
        return (
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => this.setState({app: 'siftr'})}>
              <Text>Siftr</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState({app: 'nomen'})}>
              <Text>Nomen</Text>
            </TouchableOpacity>
          </View>
        );
    }
  }
}

AppRegistry.registerComponent('SiftrNative', () => SelectApp);
