import React, { Component } from 'react';
import {StyleSheet, Text, ListView, View, ActivityIndicator, TouchableOpacity, TextInput, Picker,Button} from 'react-native';
import { connect } from "react-redux";
import { getChatDt,getSendChat } from "./action";
import GBorder from '../ui_components/GBorder';
import { Dimensions } from 'react-native'

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class ListFrm extends Component {


  componentDidMount = () => {
    const id_sender = this.props.navigation.state.params.id_sender;
    this.props.getChatDt(id_sender);
    this.setState({id_sender : id_sender});
  };
  componentDidUpdate = () => {
    
    if(!this.props.sendChat.loading && this.props.sendChat.success)
    
    this.props.getChatDt(this.state.id_sender);
  };

  constructor(props){
    super(props);
    this.state = {
      id_sender : 0,
      message : ""
    }
  }

  render() {
    return (
      <View >         
        {(this.props.chatDt.loading || !this.props.chatDt.success) ? (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
     ) : (
     <View>
       <ListView
      rightOpenValue={-75}
      dataSource={ds.cloneWithRows(this.props.chatDt.data)}
      renderRow={data =>
        <TouchableOpacity ><View style={styles.box}><Text>{data.message}</Text></View><GBorder/></TouchableOpacity>
       
      }
    />
     <TextInput
                style={{height: 40, width: Dimensions.get('window').width*0.85 }}
                placeholder="Search"
                onChangeText={(text)=>this.setState({ message: text })}
              />
    <Button style={{ color:"#EF0A05", flex:1, padding:10 }} title="" onPress={()=>this.props.getSendChat(this.state.id_sender,this.state.message)} >            
          </Button> 
    </View>
    )
     }

      </View>
    );
  }
}

const mapStateToProps = ({ chatDt,sendChat }) => ({
  chatDt,
  sendChat  
});

const mapDispatchToProps = dispatch => ({
  getChatDt: payload => dispatch(getChatDt(payload)),
  getSendChat: (id_sender, message) => dispatch(getSendChat(id_sender, message)),
  
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