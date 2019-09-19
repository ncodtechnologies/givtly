import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const imgWidth = width>380 ? 125 : width*0.35; 
const imgHeight =  imgWidth * .9;
const boxWidth = (width * .93) - imgWidth; 


export default class App extends React.Component {
  render() {
    return (
            <View>
            <View style={styles.container}>
               <View style={styles.box1}>
                <Image  style={styles.img} source={require('../images/gift.jpeg')}/>
               </View>
               <View style={{flexDirection:'column',paddingLeft:10, width:boxWidth, flex:1}}>
                      <View style={styles.heading}>
                          <Text style={{fontSize:22,color:'#EF0A05'}}>{this.props.name} </Text>
                          <Text style={{fontWeight:'bold',fontSize:18, color:'#0D80A4'}}>AED {this.props.price}</Text>
                      </View>
                      <View style={styles.box2}>
                          <Text style={{fontSize:16,paddingTop:7}}>{this.props.description}</Text>
                      </View>
                      <View style={styles.box3}>
                                <Text style={{fontWeight:'bold',fontSize:14}}>{this.props.place}</Text>
                                <Text style={{fontWeight:'bold',textAlign:'right',fontSize:14}}>{this.props.date}</Text>
                      </View>
               </View>
            </View>
        </View>
     )
  }
}


const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
  },
  box1:{
    alignItems:'flex-start',
    borderRadius: 10,
  },
  box2:{  
    alignItems:'flex-start',
  },
  box3:{
    flexDirection:'row',
    color:'#c4c2c2',
    alignItems:'flex-end',
    justifyContent:'space-between',
    width:boxWidth,
  },
  img:{
    width:imgWidth,
    height:imgHeight,
    borderRadius: 10,
  },

  heading:{
    color:'#307F9B',
    fontSize:25,
  },

});

