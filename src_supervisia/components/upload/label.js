import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class App extends React.Component {
  render() {    
    return (

            <View>
                  <Text style={{fontSize:15, fontWeight:"bold", padding:8, color:"#EF0A05"}}>{this.props.label}</Text>                       
          </View>  
  );
  }
}
const styles = StyleSheet.create({
  
});

