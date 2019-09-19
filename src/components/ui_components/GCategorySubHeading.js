import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import {categoryFontSize} from './GStyleSize';

export default class App extends React.Component {
  render() {
    return (  
                  <View>
                      <Text  style={{fontSize:categoryFontSize}}>{this.props.subHeading}</Text>
                  </View>
    );
  }
}
