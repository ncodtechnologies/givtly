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
    postDt = {id_post: 1, place:"Dubai", price:"120", title:"Reynold Pen", description:"New Model",date:"10/4/2019"};
    return (
      <ScrollView>   
        <GImageDetails  name={postDt.title} date={postDt.date} description={postDt.description} place={postDt.place} />

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
