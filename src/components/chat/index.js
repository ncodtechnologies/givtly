import React, { Component } from 'react';
import {StyleSheet, Text, CheckBox, View, ScrollView, TextInput} from 'react-native';
import { connect } from "react-redux";
import { sendChat, getChat } from "./action";
import { Button } from 'react-native-paper';
import Chat from './chat';

class UploadFrm extends Component {

  state = {
    messageSending : false,
    message : "",
    receiver : "5d83c99a7298132a782a0328"
  }
  static navigationOptions = ({ navigation }) => {
      return {
      headerTitle: (<View style={{ flex:1, alignItems:"center" }}><Text style={{ textAlign:"center", color:"#FFF", fontSize: 18, fontWeight:"bold" }} >Chats</Text></View>),
      }
  };

  componentDidMount = () => {
    this.props.getChat("5d83c99a7298132a782a0328");
  };

  componentDidUpdate = ()=> {
    if(this.state.messageSending && !this.props.chatSend.loading )
    {
      console.log("givtly=>","reloading");
      this.props.getChat("5d83c99a7298132a782a0328");
      this.setState({messageSending : false});
    }
  }

  submitChat = () => {
    if(this.state.message == "") return;
    let data = {};
    data.receiver = this.state.receiver;
    data.sender ="5d85ddda36904e245450069f";
    data.message = this.state.message;
    this.props.sendChat(data);
    this.setState({messageSending : true});
    this.setState({message: ""});
  }

  renderChatItems  () {
    return this.props.chatGet.data.map(chatItem =>{
      return (
        <Chat isLeft={chatItem.receiver == "5d85ddda36904e245450069f"} message={chatItem.message} />
      )
    })
  }

  render() {
    return (
      <View style={{flex:1,flexDirection:'column'}}>        
        <View style={{padding:10}}>
        <ScrollView>
          {this.props.chatGet.data && this.renderChatItems()}
        </ScrollView>
        </View>
        <View style={{flex:1,flexDirection:'row',bottom:0,position:'absolute',width:'100%',backgroundColor:'#fff',paddingHorizontal:10}}>
          <View style={{flex:1}}>
           <TextInput 
            placeholder="Type here..." style={{borderWidth:1,borderColor:'#ccc',borderRadius:20,height:40,paddingHorizontal:20}}
            value={this.state.message}
            onChangeText={(text) => this.setState({message : text})}
            />
          </View>
          <View  style={{justifyContent:'center',}}>
           <Button color="red" mode="contained" style={{height:40}} onPress={()=>this.submitChat()} >Send</Button>
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({ chatGet, chatSend }) => ({
  chatGet,
  chatSend
});

const mapDispatchToProps = dispatch => ({
  sendChat: payload => dispatch(sendChat(payload)),
  getChat: payload => dispatch(getChat(payload)),
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