import React, { Component } from 'react';
import {StyleSheet, Text, CheckBox, View, ScrollView, TextInput} from 'react-native';
import { connect } from "react-redux";
import { sendChat } from "./action";
import { Button } from 'react-native-paper';
import Chat from './chat';

class UploadFrm extends Component {

  state={
    chatList:[
      { 
        isLeft:true,
        message:"Hello"
      },
      { 
        isLeft:true,
        message:"Hello... How are you??"
      },
      { 
        isLeft:false,
        message:"i'm gud......heeeyyyyy"
      },
      { 
        isLeft:true,
        message:"jig jig jig jig jig jig jig jig jig jig jig jig jig jig jig jig jig jig jig jig jig jig jig jig "
      },
    ]
  }
  static navigationOptions = ({ navigation }) => {
      return {
      headerTitle: (<View style={{ flex:1, alignItems:"center" }}><Text style={{ textAlign:"center", color:"#FFF", fontSize: 18, fontWeight:"bold" }} >Chats</Text></View>),
      }
  };

  componentDidMount = () => {
    this.props.sendChat("");
  };

  renderChatItems  () {
  return  this.state.chatList.map(chatItem =>{
      return(
        <Chat isLeft={chatItem.isLeft} message={chatItem.message} />
      )
    })
  }

  render() {
    return (
      <View style={{flex:1,flexDirection:'column'}}>        
        <View style={{padding:10}}>
        <ScrollView>
          {this.renderChatItems()}
            
        </ScrollView>
        </View>
        <View style={{flex:1,flexDirection:'row',bottom:0,position:'absolute',width:'100%',backgroundColor:'#fff',paddingHorizontal:10}}>
          <View style={{flex:1}}>
           <TextInput placeholder="Type here..." style={{borderWidth:1,borderColor:'#ccc',borderRadius:20,height:40,paddingHorizontal:20}} />
          </View>
          <View  style={{justifyContent:'center',}}>
           <Button color="red" mode="contained" style={{height:40}} >Send</Button>
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({  }) => ({
  
});

const mapDispatchToProps = dispatch => ({
  sendChat: payload => dispatch(sendChat(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadFrm);


const styles = StyleSheet.create({
  box:{
    padding:10,
  },
});