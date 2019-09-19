import React, { Component } from "react";
import { View,Text, StyleSheet ,TextInput,Picker} from "react-native";

export default class App extends Component {
  render = () => (
      <View>
        <Text style={{fontSize:20,textAlign:'center',color:'black'}}>ESTIMATE</Text>
        <View style={{paddingTop:20}}>
            <Text style={styles.txt}>Channel Size</Text>
            <TextInput placeHolder="size" style={styles.box} />
        </View>
        <View style={{paddingTop:20}}>
            <Text style={styles.txt}>Item</Text>
            <View>
                <Picker style={{borderWidth:1,borderColor:'#C1C1C2'}}>
                    <Picker.Item label = "Item 1" value = "1" />
                    <Picker.Item label = "Item 2" value = "2" />
                </Picker>
            </View>
    </View>
    <View style={{paddingTop:20}}>
            <Text style={styles.txt}>Dimension</Text>
            <View style={{flexDirection:'row'}}>
                <TextInput placeHolder="size" style={[styles.box,{width:150}]} /> 
                <Text style={{fontSize:30}}> * </Text>
                <TextInput placeHolder="size" style={[styles.box,{width:150}]}/>
            </View>
        </View>
        <View style={{paddingTop:20}}>
                <Text style={styles.txt}>Quantity</Text>
                <TextInput placeHolder="size" style={styles.box} />
        </View>
    </View>

  );
}
const styles = StyleSheet.create({
  box:{
    height:40,
    fontSize: 14,
    borderBottomWidth : 1,
    borderColor:'#C1C1C2',
    paddingLeft:30
  },
  txt:{
    fontSize: 16,
    color:'#6A54D9',
  },
  btn:{
    height:50,
    borderRadius: 45, 
    borderColor:'#6A54D9',
    borderBottomWidth: 1,
    backgroundColor:'#6A54D9',
    alignItems:'center',
    justifyContent:'center',
    width:250,
    elevation:5
  },
});
