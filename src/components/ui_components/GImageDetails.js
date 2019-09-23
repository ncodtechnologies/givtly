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
    const { _id } = this.props.post;

    dateFormat = date => {
      return (
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
      );
    };

    return (
            <View>
                     
            <View style={styles.container}>
                <View>    
                  <Slideshow 
                    height={400}
                    indicatorColor="#EF0A05"
                    dataSource={[
                      { url:`${BASE_URL}post/image/${_id}/0` },
                      { url:`${BASE_URL}post/image/${_id}/1` },
                      { url:`${BASE_URL}post/image/${_id}/2` }
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
                        <Text style={{fontWeight:'bold',fontSize:20, color:'#0D80A4'}}>AED {this.props.post.price}</Text>
                        <View >
                          <Text style={{textAlign:'right',fontSize:18,paddingBottom:5}}>{this.props.post.place}</Text>
                          <Text style={{textAlign:'right',fontSize:18,paddingBottom:5}}>{dateFormat(new Date(this.props.post.date))}</Text>
                        </View>
                   </View>
                <GBorder/>
                <View style={{ flexDirection: "column", flex:1, padding: 10 }} >
                  <TouchableOpacity style={{flex:1,width:"100%", marginVertical:5, alignItems: "center", borderColor:"#0D80A4", borderWidth:1, padding: 15, borderRadius:5 }} >
                    <Text style={{ fontSize: 20, color:"#0D80A4" }} > Call </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{flex:1,width:"100%", marginVertical:5, alignItems: "center", borderColor:"#0B9973", borderWidth:1, padding: 15, borderRadius:5 }} >
                    <Text style={{ fontSize: 20, color:"#0B9973" }} > Message </Text>
                  </TouchableOpacity>
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
    marginTop : 10,
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'space-between',
    padding: 15,
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

