import React, { Component } from 'react';
import {TextInput, Text, ListView, View, ActivityIndicator, TouchableOpacity, FlatList, Image} from 'react-native';
import { connect } from "react-redux";
import { getCategoryList } from "./action";

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class CatListFrm extends Component {

  constructor(props){
    super(props);
    this.state = {
      showSearch : false,
      showSort : false,
      filter : "",
      sort: "Date",
      section_key: "1",
      section: "Work Gifts",
      section_img: require("../images/section1.png"),
    }
  }

  
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <TextInput />,
    }
};

  componentDidMount = () => {
    this.props.getCategoryList("1");
  };

  render() {
    
    return (
      <View >
       
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[
              {key: '1', section: "Work Gifts", img: require("../images/section1.png")},
              {key: '2', section: "Birthday Gifts", img: require("../images/section2.png")},
              {key: '3', section: "Wedding Gifts", img: require("../images/section3.png")},
              {key: '4', section: "Family Gifts", img: require("../images/section4.png")},
              {key: '5', section: "General Gifts", img: require("../images/section5.png")},
            ]}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {this.setState({section_key:item.key, section:item.section, section_img: item.img }) ,  this.props.getCategoryList(item.key); } }
              style={{ padding: 15, flexDirection: "row", borderBottomWidth: (item.key==this.state.section_key) ? 5 : 0 , borderBottomColor: "red" }} >
              <Image source={item.img} style={{ height:25, width: 20, resizeMode: "contain" }} />
              <Text style={{ paddingLeft: 5,fontSize: 16 }} >{item.section}</Text>
            </TouchableOpacity>
          )
        }
        />
        {(this.props.categoryList.loading || !this.props.categoryList.success) ? (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>                            
        </View>
     ) : (
     <View>
       <ListView
      rightOpenValue={-75}
      dataSource={ds.cloneWithRows(this.props.categoryList.data)}
      renderSeparator={() => <View style={{ height:1, backgroundColor:"#ABB2B9" }} />}
      renderRow={data =>
        <TouchableOpacity
         onPress={()=> this.props.navigation.navigate("SubCategoryList", { id_category: data.id_category, category: data.category, section: this.state.section, section_img : this.state.section_img  })}
         style={{ height: 50 }}
          >
            <View style={{flex: 1,flexDirection:'row', backgroundColor:'green', justifyContent:'center', alignItems:'center'}}>
                <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
                    <View style={{flex: 1,flexDirection:'row',alignItems:'flex-end',alignSelf:'flex-end',margin:10}}>
                        <View style={{backgroundColor:'white',borderRadius:10,flexDirection:'column',height:100, width:100}}></View>
                    </View>
                    <View style={{flex: 1,flexDirection:'row',alignItems:'flex-start',alignSelf:'flex-end',margin:10}}>
                        <View style={{backgroundColor:'white',borderRadius:10,flexDirection:'column',height:100, width:100}}></View>
                    </View>
                </View>

                <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
                    <View style={{flex: 1,flexDirection:'row',alignItems:'flex-end',alignSelf:'flex-start',margin:10}}>
                        <View style={{backgroundColor:'white',borderRadius:10,flexDirection:'column',height:100, width:100}}></View>
                    </View>
                    <View style={{flex: 1,flexDirection:'row',alignItems:'flex-start',alignSelf:'flex-start',margin:10}}>
                        <View style={{backgroundColor:'white',borderRadius:10,flexDirection:'column',height:100, width:100}}></View>
                    </View>
                </View>

                <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center', position:'absolute'}}>
                    <View style={{backgroundColor:'blue',
              height:100, width:100, borderRadius:100/2}}></View>
       </View>
</View>
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

const mapStateToProps = ({ categoryList }) => ({
  categoryList
  
});

const mapDispatchToProps = dispatch => ({
  getCategoryList: payload => dispatch(getCategoryList(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatListFrm);
