import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import GBorder from './GBorder';

export default class App extends React.Component {
  render() {
    return (
            <View>
                 <View>
                          <Text style={{fontSize:22,textAlign:'center',fontWeight:'bold'}}>Description{this.props.name} </Text>
                </View>
               <View style={styles.box}>
                        
               
                        <View>
                          <Text style={{fontSize:20}}>REF NUMBER:#4678347{this.props.number}</Text>
                       </View>                       
                        <View>
                          <Text style={{fontSize:18}}>aaaaasd ertert ertyert refgy kl rtyry sd dfg dgddfytr df dtg dfg dfgddfdf dtg dfg dfgddf uiouoiui tyututu tyutdf dtg dfg dfgddf uiouoiui tyututu tyut uiouoiui tyututu tyut{this.props.description}</Text>
                        </View>
                        <View>
                          <Text style={{fontSize:18}}>aaaaa{this.props.line1}</Text>
                        </View>
                        <View>
                          <Text style={{fontSize:18,color:'#c4c2c2'}}>* Over 300 luxuary cars at low prices{this.props.line2}</Text>
                        </View>
             </View>
             <View>
                          <Text style={{fontSize:22,textAlign:'center',color:'blue',fontWeight:'bold',padding:20}}>Read More {this.props.read} </Text>
             </View>
             <GBorder/>
          </View>
     )
  }
}

const styles = StyleSheet.create({
 
  box:{  
    alignItems:'flex-start',
    justifyContent:'space-evenly',
    flexDirection:'column',
    flex:0,
    height:200,
    padding:10,
  },
});

