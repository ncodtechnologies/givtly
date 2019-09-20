import React, { Component } from 'react';
import {StyleSheet, Text, CheckBox, View, ScrollView, TextInput} from 'react-native';
import { connect } from "react-redux";
import { sendChat } from "./action";

class UploadFrm extends Component {

  
  static navigationOptions = ({ navigation }) => {
      return {
      headerTitle: (<View style={{ flex:1, alignItems:"center" }}><Text style={{ textAlign:"center", color:"#FFF", fontSize: 18, fontWeight:"bold" }} >Chats</Text></View>),
      }
  };

  componentDidMount = () => {
    this.props.sendChat("");
  };

  render() {
    return (
      <View />
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