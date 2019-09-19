import React, { Component } from 'react';
import {StyleSheet, Text, ListView, View, ScrollView} from 'react-native';
import { connect } from "react-redux";
import GLocation from '../ui_components/GLocation';
import GDescription from '../ui_components/GDescription';
import GImageDetails from '../ui_components//GImageDetails';
import GBorder from '../ui_components/GBorder';

class DtFrm extends Component {

  componentDidMount = () => {
    
  };

  render() {
    const id_post = this.props.navigation.state.params.id_post;
    var postDtArr = this.props.postList.data.filter(function (el) {
      return el.id_post == id_post;
    });
    postDt = postDtArr.length>0 ? postDtArr[0] : null;
    return (
      <ScrollView>   
        <GImageDetails  name={postDt.title} date={postDt.date} description={postDt.description} place={postDt.place} />
        <GDescription name={postDt.title} date={postDt.date} description={postDt.description} place={postDt.place} />
        <GLocation/>      
        <GBorder/>
      </ScrollView>
    )
  }
}

const mapStateToProps = ({ postList }) => ({
  postList
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DtFrm);
