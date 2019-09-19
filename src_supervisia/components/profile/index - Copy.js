import React, { Component } from 'react';
import {StyleSheet, Text, CheckBox, View, ScrollView, TextInput, Image} from 'react-native';
import { connect } from "react-redux";
import { Dimensions } from 'react-native'

class UploadFrm extends Component {

  componentDidMount = () => {
    
  };

  render() {
    return (
      <View style={{ flex:1 }} >
        <View style={{ height:200, backgroundColor: "#EF0A05" }} ></View>
        <View style={styles.box_profile} >
          <View style={{ flex: 1, flexDirection:"row" }} >
            <View style={{ flex: 1, width: 100 }} >
              <Image source={(require("../images/gift.jpeg"))} style={{ width:80, height:80 }} />   
              <Text style={{ fontSize: 20, fontWeight: "bold" }} >Names</Text>                      
              <Text>Email</Text>
              <Text>1234 567890</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({  }) => ({
  
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadFrm);


const styles = StyleSheet.create({
  box_profile:{
    position: "absolute",
    top: 100,
    left:  (Dimensions.get('window').width/2) - 125,
    width: 250,
    height: 250,
    backgroundColor:"#FFF",
    borderRadius: 10,
    borderColor: "#CCD1D1",
    borderWidth: 1,
    elevation: 4,
    justifyContent:"center"
  },
});