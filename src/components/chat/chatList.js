import React, { Component } from 'react';
import {StyleSheet, Text, CheckBox, View, ScrollView, ListView,TouchableOpacity} from 'react-native';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });


class Chat extends Component{
222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222255555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
constructor(props){
    super(props);
    this.state = {
      chats : [
        { message: "Hi" },
        { message: "Hello" }
      ]
    }
  }
render(){
  const {navigate}=this.props.navigation;
    return(
        <View>
             <ListView
              dataSource={ds.cloneWithRows(this.state.chats)}
              renderSeparator={() => <View style={{ height:1, backgroundColor:"#CCD1D1" }} />}
              renderRow={data =>
                <TouchableOpacity  onPress={() =>navigate('UploadPostDt')}
                  style={{ height: 70, flexDirection:"row", padding: 5 }}
                  >
                 <View style={{ justifyContent: "center" }} >
                    <Text style={{ padding: 10, fontSize: 15 }} >{data.message}</Text>
                  </View>
                </TouchableOpacity>
              }
     />
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