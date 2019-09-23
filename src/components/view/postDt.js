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
    const postDt = this.props.navigation.state.params.post;
    return (
      <ScrollView>   
        <GImageDetails post={postDt} />
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
