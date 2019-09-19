import * as React from 'react';
import { Button , Text, View, StyleSheet } from 'react-native';

export default class App extends React.Component {
  render() {    
    return (
          <Button style={{ color:"#EF0A05", flex:1, padding:10 }} title={this.props.label}  >            
          </Button>  
  );
  }
}
const styles = StyleSheet.create({
  
});

