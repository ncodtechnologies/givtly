import React, { Component } from 'react';
import {StyleSheet, Text, CheckBox, View, ScrollView, TextInput, Image,TouchableOpacity} from 'react-native';
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
          <View style={{ flex: 1, flexDirection:"row"}} >
            <View style={{ flex: 1, width: 100  ,alignItems:'center',justifyContent:'center'}} >
              <Image source={(require("../images/gift.jpeg"))} style={{ width:100, height:100 ,borderRadius:55,padding:5,}} />   
              <Text style={{ fontSize: 26, fontWeight: "bold",padding:5 }} >Abdul Qadhir Chalil</Text>                      
              <Text style={{ fontSize: 16,padding:2 }}>kader.chalil@email.com</Text>
              <Text style={{ fontSize: 16,padding:2 }}>9786567890</Text>
            </View>
          </View>
        </View>
        <Text style={{ top: 195,fontSize: 16,padding:2,textAlign:'center' }}>Business bay, Dubai</Text>
        <View>
        <TouchableOpacity style={styles.btn} >
              <Text style={{ fontSize: 18,padding:2,textAlign:'center' }}>Set Location</Text>
        </TouchableOpacity>
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

    btn:{
      position: "absolute",
      top: 210,
      width: 250,
      left:  (Dimensions.get('window').width/2) - 125,
      backgroundColor:"#FFF",
      borderRadius: 35,
      borderColor: "#CCD1D1",
      borderWidth: 1,
      elevation: 1,
      justifyContent:"center",
      padding:10,
    },

});