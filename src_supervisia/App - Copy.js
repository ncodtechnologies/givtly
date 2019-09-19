import React, { Component } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SafeAreaView } from "react-navigation";
import Navigator from "./navigator/root";
import { StateComponent } from "./components/styled/components";
import initStore from "./store";
import { StatusBar, View,Text, Platform,StyleSheet ,TextInput,Picker,TouchableOpacity} from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
const { store, persistor } = initStore();
const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 40 : StatusBar.currentHeight;
export default class App extends Component {
  render = () => (
    <Provider store={store}>
      <PersistGate
        persistor={persistor}
        loading={<StateComponent loading error={false} />}
      >
        <SafeAreaView
          style={{ flex: 1 }}
          forceInset={{ bottom: "never", top: "never" }}
        >
          {Platform.OS === "ios" && (
            <View
              style={{
                width: "100%",
                height: STATUS_BAR_HEIGHT,
                backgroundColor: "#183E61"
              }}
            >
              <StatusBar barStyle="light-content" />
            </View>
          )}
          <StatusBar backgroundColor="#183E61" barStyle="light-content" />
          <PaperProvider>
          <View style={{flex: 1,flexDirection:'row',justifyContent:'center',}}>
             <View style={{alignItems:'center',justifyContent:'center',}}>
                <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
                    <View style={{flex: 1,flexDirection:'row',alignItems:'flex-end',alignSelf:'flex-end'}}>
                        <View style={{backgroundColor:'#6A54D9',borderRadius:10,flexDirection:'column',height:500, width:500}}></View>
                    </View>
                    <View style={{flex: 1,flexDirection:'row',alignItems:'flex-start',alignSelf:'flex-end'}}>
                        <View style={{backgroundColor:'white',borderRadius:10,flexDirection:'column',height:500, width:500}}></View>
                    </View>
                </View>
                
                <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center', position:'absolute',}}>
                    <View style={{backgroundColor:'white',height:450, width:350, borderRadius:10,elevation:5,padding:15}}>
                        <Text style={{fontSize:20,textAlign:'center',color:'black'}}>ESTIMATE</Text>
                        <View style={{paddingTop:20}}>
                              <Text style={styles.txt}>Channel Size</Text>
                              <TextInput placeHolder="size" style={styles.box} />
                        </View>
                        <View style={{paddingTop:20}}>
                              <Text style={styles.txt}>Item</Text>
                              <View>
                                  <Picker style={{borderBottomWidth:1}}>
                                    <Picker.Item label = "Steve" value = "steve" />
                                    <Picker.Item label = "Ellen" value = "ellen" />
                                    <Picker.Item label = "Maria" value = "maria" />
                                  </Picker>
                            </View>
                       </View>
                       <View style={{paddingTop:20}}>
                            <Text style={styles.txt}>Dimension</Text>
                            <View style={{flexDirection:'row'}}>
                                  <TextInput placeHolder="size" style={[styles.box,{width:150}]} /> 
                                  <Text> * </Text>
                                  <TextInput placeHolder="size" style={[styles.box,{width:150}]}/>
                            </View>
                        </View>
                        <View style={{paddingTop:20}}>
                                  <Text style={styles.txt}>Quantity</Text>
                                  <TextInput placeHolder="size" style={styles.box} />
                        </View>
                    </View>
                </View>
                
                <View style={{alignItems:'flex-end',bottom:95, position:'absolute',}}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={{color:'white',fontSize: 20}}> Button </Text>
                      </TouchableOpacity>
                </View></View>
           </View>
          </PaperProvider>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}
const styles = StyleSheet.create({
  box:{
    height:40,
    fontSize: 14,
    borderBottomWidth : 1,
    borderColor:'#C1C1C2',
    paddingLeft:30
  },
  txt:{
    fontSize: 16,
    color:'#6A54D9',
  },
  btn:{
    height:50,
    borderRadius: 45, 
    borderColor:'#6A54D9',
    borderBottomWidth: 1,
    backgroundColor:'#6A54D9',
    alignItems:'center',
    justifyContent:'center',
    width:250,
    elevation:5
  },
});
