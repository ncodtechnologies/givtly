import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const imgWidth = width * 0.45; 
const imgHeight= imgWidth * 1.7; 

export default class App extends React.Component {
  render() {
    return (
            <View style={styles.container}>
               <View style={styles.box1}>
                   <Image  style={styles.img} source={require('./Givtly/gift.jpg')}/>
               </View>
            </View>
              )
       }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',  
    paddingLeft:15,
    padding:10,
  },
  box1:{
    alignItems:'flex-start',
  },
  img:{
    width:imgWidth,
    height:imgHeight,
    borderRadius:10,
  },
});

