import React, { Component } from 'react';
import {TextInput, Text, ListView, View, ActivityIndicator, TouchableOpacity, FlatList, Image} from 'react-native';
import { connect } from "react-redux";
import { getSubCategoryList } from "./action";
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class CatListFrm extends Component {

  constructor(props){
    super(props);
    this.state = {
      filter : "",
      id_category : 0
    }
  }
  
  filterList = (text) => {
    this.props.getSubCategoryList(this.state.id_category, text);
  }

  static navigationOptions = ({ navigation }) => {
    const {params = {}} = navigation.state;
    return {
    headerTitle: (<View style={{  backgroundColor: "#EA5858", flexDirection: "row" }} >
                        <TextInput onChangeText={(text)=>params.filterList(text)} placeholder="Search" placeholderTextColor="#E3C5C5" style={{flex:1, color:"#FFF", fontSize: 20 }} />
                        
                        <TouchableOpacity style={{ padding : 15 }}  >
                        <AntDesignIcon name="search1"
                          style={{ fontSize : 20, color: "#FFF" }}
                        />
                        </TouchableOpacity>
                  </View>
                  ),
      headerLeft: (
        <TouchableOpacity style={{ padding : 5 }} onPress={() => navigation.goBack()} >
        <AntDesignIcon name="left"
          style={{ fontSize : 20, color: "#FFF" }}
        />
        </TouchableOpacity>
      ),
    }
};


componentDidMount = () => {
  var id_category = this.props.navigation.state.params.id_category;
  this.setState({
    id_category
  });
  this.props.navigation.setParams({
    filterList:  (text) => this.filterList(text)
  });
  this.props.getSubCategoryList(id_category, "");
};
  render() {
    const section = this.props.navigation.state.params.section;
    const section_img = this.props.navigation.state.params.section_img;
    const category = this.props.navigation.state.params.category;
    return (
      <View >
        <View style={{ flexDirection:"row" }}>
            <TouchableOpacity
              style={{ padding: 15, flexDirection: "row" }} >
              <Image source={section_img} style={{ height:25, width: 20, resizeMode: "contain" }} />
              <Text style={{ paddingLeft: 5,fontSize: 16 }} >{section}</Text>
            </TouchableOpacity>
            <Image source={require("../images/right_arrow.png")} style={{ height:50, width:40, resizeMode: "stretch" }} />
          
            <TouchableOpacity
              style={{ padding: 15, flexDirection: "row" }} >
              <Text style={{ paddingLeft: 5,fontSize: 16 }} >{category}</Text>
            </TouchableOpacity>
        </View>
       
        {(this.props.subCategoryList.loading || !this.props.subCategoryList.success) ? (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>                            
        </View>
     ) : (
     <View>
    <ListView
      rightOpenValue={-75}
      dataSource={ds.cloneWithRows(this.props.subCategoryList.data)}
      renderSeparator={() => <View style={{ height:1, backgroundColor:"#ABB2B9" }} />}
      renderRow={data =>
        <TouchableOpacity
          onPress={()=> this.props.navigation.navigate("PostList", { id_sub_category: data._id })}
          style={{ height: 50 }}
          >
          <Text style={{ padding: 10, fontSize: 18 }} >{data.subcategory}</Text>
        </TouchableOpacity>
      }
    />
    </View>
    )
     }

      </View>
    )
  }
}

const mapStateToProps = ({ subCategoryList }) => ({
  subCategoryList
});

const mapDispatchToProps = dispatch => ({
  getSubCategoryList: (payload, filter) => dispatch(getSubCategoryList(payload, filter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatListFrm);
