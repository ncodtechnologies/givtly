import * as React from 'react';
import { Text, View, Picker, StyleSheet } from 'react-native';

export default class App extends React.Component {
  render() {    
    return (

            <View>
                  <Picker style={{borderWidth:.5}} >  
                      <Picker.Item label="India"  value="1nd"/>
                      <Picker.Item label="China" value="chn"/>
                  </Picker>      
                    
          </View> 
  );
  }
}

const styles = StyleSheet.create({
});
