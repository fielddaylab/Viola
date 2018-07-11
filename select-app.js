import {SiftrNative} from './siftr/src-native/app';
import {HomeScreen} from './nomen/src/app';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(246,246,243)',
    padding: 20,
  },
  logo: {
    resizeMode: 'contain',
    flex: 1,
    marginTop: 30,
    marginBottom: 15,
    alignSelf: 'center',
  },
  appTouch: {
    margin: 10,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    backgroundColor: 'rgba(0,0,0,0)',
    elevation: 1, // supposed to be for android, doesn't appear to work though
  },
  appImage: {
    resizeMode: 'contain',
    flex: 1,
    aspectRatio: 664/500, // why is this necessary. https://stackoverflow.com/a/44709894/509936
  },
});

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
          siftr_id={32665}
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
          <View style={styles.outer}>
            <Image source={require('./images/viola-logo.png')} style={styles.logo} />
            <TouchableOpacity onPress={() => this.setState({app: 'nomen'})} style={styles.appTouch}>
              <Image source={require('./images/viola-identify.png')} style={styles.appImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState({app: 'siftr'})} style={styles.appTouch}>
              <Image source={require('./images/viola-share.png')} style={styles.appImage} />
            </TouchableOpacity>
          </View>
        );
    }
  }
}
