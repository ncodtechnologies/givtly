import React, { Component } from "react";
import Screen from "./screen";
import { connect } from "react-redux";
import {
  addPost
} from "./action";
import { View, Text } from "react-native";
import { getCategoryList, getSubCategoryList } from '../view/action';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
    headerTitle: (<View style={{ flex:1, alignItems:"center" }}><Text style={{ textAlign:"center", color:"#FFF", fontSize: 18, fontWeight:"bold" }} >Post a Gift</Text></View>),
    }
};


  componentDidMount = () => {
    this.props.getCategoryList("1");
    this.props.getSubCategoryList("","");
  };
 
  
  render = () => {
    const {
      postAdd,
      categoryList,
      subCategoryList
    } = this.props;

   return (
      <View style={{ flex: 1 }}>
        <Screen {...this.props} state={this.state} />
      </View>
    );
  };
}
const mapStateToProps = ({
  postAdd, categoryList, subCategoryList
}) => ({
  postAdd, categoryList, subCategoryList
});
const mapDispatchToProps = dispatch => ({
  addPost: payload => dispatch(addPost(payload)),
  getCategoryList: payload => dispatch(getCategoryList(payload)),
  getSubCategoryList: payload => dispatch(getSubCategoryList(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
