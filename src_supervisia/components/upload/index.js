import React, { Component } from 'react';
import {StyleSheet, Text, CheckBox, View, ScrollView, TextInput,Image} from 'react-native';
import TALabel from './label';
import TAPicker from './picker';
import GButton from './btnRed';
import { connect } from "react-redux";

class UploadFrm extends Component {

  
  static navigationOptions = ({ navigation }) => {
      return {
      headerTitle: (<View style={{ flex:1, alignItems:"center" }}><Text style={{ textAlign:"center", color:"#FFF", fontSize: 18, fontWeight:"bold" }} >Post a Gift</Text></View>),
      }
  };

  componentDidMount = () => {
    
  };

  render() {
    return (
      <ScrollView >  

            <View style={styles.box}>
                <View style={{
    alignItems:'center',
    justifyContent:'center'
    }}>
                  <Image style={styles.img} source={require("../images/add_image.jpg")} />
                </View>

                <TALabel label="Country"/> 
                <TAPicker/> 
                <TALabel label="City"/> 
                <TAPicker/>
                <TALabel label="Category"/> 
                <TAPicker/>
                <TALabel label="Sub Category"/> 
                <TAPicker/>
                <TALabel label="Description"/>
                <TextInput multiline={true} numberOfLines={5} style={{borderWidth:.5,margin:8}}/>
                <TALabel label="Price"/>
                <TextInput style={{borderWidth:.5,margin:10}}/>
                <View style={{flex:0,flexDirection:'row',alignItems:'center'}}>
                      <CheckBox style={{padding:8}} />
                      <Text style={{fontSize:15}}>Include contact information</Text>
                </View>
                <GButton label="Upload" />
                <Text style={{fontSize:15,fontWeight: "bold", margin:8, textAlign: "center"}}>Payment method for each item is 9.99 AED for each item</Text>
          </View>          

      </ScrollView>
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
  box:{
    padding:10,
  },
  img:{
    height:330,
    width:330,
    borderRadius:10,
    borderWidth:1,
  },
});