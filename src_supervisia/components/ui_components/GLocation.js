import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import GBorder from './GBorder';

export default class App extends React.Component {
  render() {
    return (
            <View>
                 <View>
                          <Text style={{fontSize:22,textAlign:'center',fontWeight:'bold'}}>Location{this.props.name} </Text>
                </View>                    
               
                        <View>
                          <Text style={{fontSize:20,padding:20}}>UAE > Dubai > Al Quida > Al Quida International Area 3{this.props.number}</Text>
                       </View>                       
                        <View style={styles.box}>
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
    height:300,
    borderWidth:1
  },
});

