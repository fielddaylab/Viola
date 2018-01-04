import {SiftrNative} from './siftr/src-native/app';
import {HomeScreen} from './nomen/src/app';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export class SelectApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      app: null,
    };
  }

  render() {
    switch (this.state.app) {
      case 'siftr':
        return <SiftrNative
          viola={true}
          species_id={this.state.species_id}
          backToViola={() => this.setState({app: null})}
        />;
      case 'nomen':
        return <HomeScreen
          viola={true}
          backToViola={() => this.setState({app: null})}
          onViolaCollect={({nomen_id, species_id}) => {
            // TODO pass species_id to siftr
            this.setState({
              app: 'siftr',
              species_id: species_id,
            });
          }}
        />;
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
