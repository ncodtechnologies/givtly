import React, { Component } from 'react';
import {TextInput, Text, ListView, View, ActivityIndicator, TouchableOpacity, FlatList, Image} from 'react-native';
import { connect } from "react-redux";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class NotificationFrm extends Component {

  constructor(props){
    super(props);
    this.state = {
      notifications : [
        { name: "Joe and 15 others liked your post" },
        { name: "Jack and 10 others liked your post" }
      ]
    }
  }
  
  static navigationOptions = ({ navigation }) => {
      return {
      headerTitle: (<View style={{ flex:1, alignItems:"center", justifyContent: "center"}}>
                      <View style={{ flexDirection: "row", justifyContent: "center" }} >
                        <MaterialIcons name="notifications" style={{ fontSize:22, color: "white", padding:3 }} />
                        <Text style={{ textAlign:"center", color:"#FFF", fontSize: 18, fontWeight:"bold", padding:3 }} >Notifications</Text>
                      </View>
                    </View>),
      }
  };

  componentDidMount = () => {
    
  };

  render() {
    return (
      <View>
        <ListView
       rightOpenValue={-75}
       dataSource={ds.cloneWithRows(this.state.notifications)}
       renderSeparator={() => <View style={{ height:1, backgroundColor:"#CCD1D1" }} />}
       renderRow={data =>
         <TouchableOpacity
          style={{ height: 70, flexDirection:"row", padding: 5 }}
           >
           <Image source={require("../images/gift.jpeg")} style={{ height: 60, width: 60, resizeMode: "contain" }} />
           <View style={{ justifyContent: "center" }} >
            <Text style={{ padding: 10, fontSize: 15 }} >{data.name}</Text>
           </View>
         </TouchableOpacity>
       }
     />
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
)(NotificationFrm);

