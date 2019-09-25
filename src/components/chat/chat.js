import React, { Component } from 'react';
import {StyleSheet, Text, CheckBox, View, ScrollView, TextInput} from 'react-native';

class Chat extends Component{
render(){
    return(
        <View style={this.props.isLeft ? styles.alignLeft : styles.alignRight}>
           <Text style={this.props.isLeft ? styles.txtLeft : styles.txtRight}>{this.props.message}</Text>
       </View>
    )
}
}

const styles = StyleSheet.create({
    box:{
      padding:10,
    },
    txtLeft:{
      marginTop:5,
      paddingHorizontal:10,
      paddingVertical:5,
      fontSize:16,
      borderWidth:1,
      borderRadius:10,
      borderBottomLeftRadius:0,
      borderColor:'#ccc'
    },
    txtRight:{
        marginTop:5,
        paddingHorizontal:10,
        paddingVertical:5,
        fontSize:16,
        borderWidth:1,
        borderRadius:10,
        borderBottomRightRadius:0,
        borderColor:'#ccc'
    },
    alignLeft:{
        flex:1,
        alignItems:'flex-start',        
    },
    alignRight:{
      alignItems:'flex-end',
        flex:1,
    }
  });

  export default Chat;