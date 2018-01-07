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
          backToViola={() => this.setState({app: null})}
          siftr_id={30765}
          getViolaInfo={() => {
            const info = {
              nomen_id: this.state.nomen_id,
              species_id: this.state.species_id,
              saved_note: this.state.saved_note,
            };
            this.setState({
              nomen_id: null,
              species_id: null,
              saved_note: null,
            });
            return info;
          }}
          onViolaIdentify={(saved_note) => {
            this.setState({
              app: 'nomen',
              saved_note: saved_note,
            });
          }}
        />;
      case 'nomen':
        return <HomeScreen
          viola={true}
          backToViola={() => this.setState({app: null})}
          onViolaCollect={({nomen_id, species_id}) => {
            this.setState({
              app: 'siftr',
              nomen_id: nomen_id,
              species_id: species_id,
            });
          }}
        />;
      default:
        return (
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => this.setState({app: 'siftr'})}>
              <Text style={{fontSize: 20, marginBottom: 50}}>Siftr</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState({app: 'nomen'})}>
              <Text style={{fontSize: 20}}>Nomen</Text>
            </TouchableOpacity>
          </View>
        );
    }
  }
}
