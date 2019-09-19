import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { Dimensions } from 'react-native';
import GBorder from './GBorder';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Slideshow from 'react-native-image-slider-show';
import { BASE_URL } from "../../constants"

const { width, height } = Dimensions.get('window');

const imgWidth = width; 
const imgHeight =  imgWidth * .65;
const boxWidth = (width * .93) - imgWidth; 


export default class App extends React.Component {
  render() {
    return (
            <View>
                     
            <View style={styles.container}>
                <View>    
                  <Slideshow 
                    height={400}
                    indicatorColor="#EF0A05"
                    dataSource={[
                      { url:`${BASE_URL}post/image/5d760f9e7161d83770367180/` },
                      { url:`${BASE_URL}givtly/uploads/pic_${this.props.post.id_post}_2.png` },
                      { url:`${BASE_URL}givtly/uploads/pic_${this.props.post.id_post}_3.png` }
                  ]} />
                </View>
                <View style={styles.icons}> 
                <TouchableOpacity style={styles.icon} >       
                  <IconEntypo name="share" style={{fontSize: 20}} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon} >       
                  <IconEntypo name="thumbs-up" style={{fontSize: 20}} />
                </TouchableOpacity>
                </View>
                <GBorder/>
                <View style={{flexDirection:'column',padding:10, width:boxWidth,paddingTop:15}}>
                    <View style={styles.heading}>
                      <Text style={{fontSize:20,color:'#EF0A05',fontWeight:'bold',textDecorationLine:"underline"}}>{this.props.post.title}</Text>
                    </View>    
                      <Text style={{fontSize:18,paddingTop:7, textAlign:"center"}}>{this.props.post.description}</Text>
                    </View> 
                      <View style={styles.box}>
                        <Text style={{fontWeight:'bold',fontSize:20}}>AED {this.props.post.price}</Text>
                        <View >
                          <Text style={{textAlign:'right',fontSize:18,paddingBottom:5}}>{this.props.post._date}</Text>
                          <Text style={{textAlign:'right',fontSize:18,paddingBottom:5}}>{this.props.post.place}</Text>
                        </View>
                   </View>

            </View>
        </View>
     )
  }
}


const styles = StyleSheet.create({
  container:{
    flexDirection:'column',
  },
  box:{
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'space-between',
    padding: 10,
    width:boxWidth,
  },
  icons:{
    flexDirection:'row',
    color:'#c4c2c2',
    alignItems:'flex-end',
    width:imgWidth,
    justifyContent:'flex-end',
    paddingHorizontal :10
  },

  icon:{
    padding: 10,
  },

  img:{
    width:imgWidth,
    height:imgHeight,
  },

  heading:{
    fontSize:25,
    alignItems: "center"
  },

});

