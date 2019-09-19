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
      data : [
              {id: 1, name: "Pen"},
              {id: 2, name: "Bag"},
              {id: 3, name: "Folder"}
            ]
    }
  }


  static navigationOptions = ({ navigation }) => {
    return {
    headerTitle: (<View style={{ flex:1, alignItems:"center", justifyContent: "center"}}>
                    <View style={{ flexDirection: "row", justifyContent: "center" }} >
                      <Text style={{ textAlign:"center", color:"#FFF", fontSize: 18, fontWeight:"bold", padding:3 }} >Givtly</Text>
                    </View>
                  </View>),
    }
};

  componentDidMount = () => {
  //  this.props.getCategoryList("1");
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
     <View>
       <ListView
      rightOpenValue={-75}
      dataSource={ds.cloneWithRows(this.state.data)}
      renderSeparator={() => <View style={{ height:1, backgroundColor:"#ABB2B9" }} />}
      renderRow={data =>
        <TouchableOpacity
         onPress={()=> this.props.navigation.navigate("SubCategoryList", { id_category: data.id, category: data.name, section: this.state.section, section_img : this.state.section_img  })}
         style={{ height: 50 }}
          >
          <Text style={{ padding: 10, fontSize: 18 }} >{data.name}</Text>
        </TouchableOpacity>
      }
    />
    </View>

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
