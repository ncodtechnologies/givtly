import React, { Component } from 'react';
import {StyleSheet, Text, ListView, View, ActivityIndicator, TouchableOpacity, TextInput, Picker} from 'react-native';
import { connect } from "react-redux";
import { getPostList } from "./action";
import GBorder from '../ui_components/GBorder';
import GImageDescription from '../ui_components/GImageDescription';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { Dimensions } from 'react-native'

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class ListFrm extends Component {

  componentDidMount = () => {
    this.props.getPostList("");
  };
  constructor(props){
    super(props);
    this.state = {
      showSearch : false,
      showSort : false,
      filter : "",
      sort: "Date"
    }
  }

  render() {
    return (
      <View >
        <View style={{ flexDirection:"row", elevation: 4, borderBottomWidth:1, borderBottomColor: "#E7E2E2" }}>
          <TouchableOpacity style={{ justifyContent:"center", padding:15, flexDirection:"row", borderRightWidth:1, borderRightColor: "#E7E2E2", flex:0.5 }}
          onPress={()=>{this.setState({showSearch:!this.state.showSearch, showSort : false}) } }
          >
            <MaterialIcon name="sort" style={{ fontSize:16, paddingRight:5 }} />
            <Text>Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ justifyContent:"center", padding:15, flexDirection:"row", flex:0.5 }}
           onPress={()=>{this.setState({showSort:!this.state.showSort, showSearch : false}) } }
          >
            <AntDesignIcon name="filter" style={{ fontSize:16, paddingRight:5 }} />
            <Text>Sort</Text>
          </TouchableOpacity>
        </View>
        {(this.state.showSearch)?(
          <View style={{ flexDirection:"row", marginTop:5,  padding: 5, paddingHorizontal: 10 , borderColor: '#E7E2E2',borderRadius: 20, borderWidth: 1,}} >
              <TextInput
                style={{height: 40, width: Dimensions.get('window').width*0.85 }}
                placeholder="Search"
                onChangeText={(text)=>this.setState({ filter: text })}
              />
              <TouchableOpacity style={{ width: Dimensions.get('window').width*0.15, height: 40 }} onPress={()=>this.props.getPostList(this.state.filter)} >
              <AntDesignIcon name="search1" style={{ fontSize:20, padding:10 }} />
              </TouchableOpacity>
          </View>
        ):(<View />)
        }
        
        {(this.state.showSort)?(
          <View style={{ flexDirection:"row", marginTop:5,  padding: 5, paddingHorizontal: 10 , borderColor: '#E7E2E2',borderRadius: 20, borderWidth: 1,}} >
              <Picker
                selectedValue={this.state.sort}
                style={{height: 40, width: Dimensions.get('window').width*0.95}}
                onValueChange={(itemValue, itemIndex) => {
                            this.setState({sort: itemValue});
                            this.props.getPostList(this.state.filter);
                  }
                }>
                <Picker.Item label="Date" value="Date" />
                <Picker.Item label="Price" value="Price" />
              </Picker>
          </View>
        ):(<View />)
        }

        

        {(this.props.postList.loading || !this.props.postList.success) ? (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
     ) : (
     <View>
       <ListView
      rightOpenValue={-75}
      dataSource={ds.cloneWithRows(this.props.postList.data)}
      renderRow={data =>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("PostDt", { id_post : data.id_post })} >
          <View style={styles.box}><GImageDescription place={data.place} price={data.price} name={data.title} date={data.date}  description={data.description}  /></View><GBorder/></TouchableOpacity>
      }
    />
    </View>
    )
     }

      </View>
    );
  }
}

const mapStateToProps = ({ postList }) => ({
  postList
});

const mapDispatchToProps = dispatch => ({
  getPostList: payload => dispatch(getPostList(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListFrm);



const styles = StyleSheet.create({
  box:{
    padding:15,
  },
});