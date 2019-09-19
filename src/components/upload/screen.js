import React, { Component } from 'react';
import {StyleSheet, Text, CheckBox, View, ScrollView, TextInput,Image, Picker} from 'react-native';
import TALabel from './label';
import TAPicker from './picker';
import GButton from './btnRed';
import { withFormik } from "formik";
import * as Yup from "yup";
import { TouchableOpacity } from 'react-native-gesture-handler';
var ImagePicker = require("react-native-image-picker");

const UploadFrm = ({
        handleSubmit,
        setFieldValue,
        values,
        categoryList,
        subCategoryList,
        getSubCategoryList,
        errors
      }) => {

    const options = {
        title: 'Select Avatar',
        customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };

    const renderCatList = () =>
            categoryList.data.map(category => (
          <Picker.Item
            key={category.id_category}
            label={category.category}
            value={category.id_category}
          />
    ));

    const renderSubCatList = () =>
            (subCategoryList.data && subCategoryList.data.map(category => (
          <Picker.Item
            key={category.id_sub_category}
            label={category.sub_category}
            value={category.id_sub_category}
          />
            )
    ));
    
    openImagePicker = (i) => {
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
            console.log('User cancelled image picker');
            } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            } else {
            const source = { uri: response.uri };
        
            const file = {
                uri: response.uri,
                type: response.type,
                name: response.fileName
            };
            setFieldValue(`file_${i}`, file);
          }
        });
    }

    return (
      <ScrollView >  
            <View style={styles.box}>
                <View
                    style={{
                        alignItems:'center',
                        justifyContent:'center',
                        flexDirection: 'row'
                      }}>
                        <ScrollView
                            horizontal={true}
                            >
                            <TouchableOpacity onPress={()=>this.openImagePicker(0)}>
                                <Image  style={styles.img} source={values.file_0 || require("../images/add_image.jpg")} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.openImagePicker(1)} >
                                <Image  style={styles.img} source={values.file_1 || require("../images/add_image.jpg")} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.openImagePicker(2)} >
                                <Image  style={styles.img} source={values.file_2 || require("../images/add_image.jpg")} />
                            </TouchableOpacity>
                        </ScrollView>
                </View>

                <TALabel label="City"/> 
                <View>
                  <Picker >  
                    <Picker.Item label="Abu Dhabi" value="Abu Dhabi"/>
                    <Picker.Item label="Ajman" value="Ajman"/>
                    <Picker.Item label="Sharjah" value="Sharjah"/>
                    <Picker.Item label="Dubai" value="Dubai"/>
                    <Picker.Item label="Fujairah" value="Fujairah"/>
                    <Picker.Item label="Ras Al Khaimah" value="Ras Al Khaimah"/>
                    <Picker.Item label="Umm Al Quwain" value="Umm Al Quwain"/>
                  </Picker>    
                </View> 
                <TALabel label="Category"/> 
                <View>
                  <Picker onValueChange={(value)=>getSubCategoryList(value,"")} >  
                    <Picker.Item label="Work Gifts" value="1"/>
                    <Picker.Item label="Birthday Gifts" value="2"/>
                    <Picker.Item label="Wedding Gifts" value="3"/>
                    <Picker.Item label="Family Gifts" value="4"/>
                    <Picker.Item label="General Gifts" value="5"/>
                  </Picker>    
                </View> 
                <TALabel label="Sub Category"/> 
                <View>
                  <Picker >  
                      {renderCatList()}
                  </Picker>    
                </View> 
                <TALabel label="Brand"/> 
                <View>
                  <Picker >  
                      {renderSubCatList()}
                  </Picker>    
                </View> 
                <TALabel label="Description"/>
                <TextInput multiline={true} numberOfLines={5} style={{borderWidth:.5,margin:8}}/>
                <TALabel label="Price"/>
                <TextInput style={{borderWidth:.5,margin:10}}/>
                <View style={{flex:0,flexDirection:'row',alignItems:'center'}}>
                      <CheckBox style={{padding:8}} />
                      <Text style={{fontSize:15}}>Include contact information</Text>
                </View>
                <GButton 
                    onPress={handleSubmit}
                    label="Upload" />
                <Text style={{fontSize:15,fontWeight: "bold", margin:8, textAlign: "center"}}>Payment method for each item is 9.99 AED for each item</Text>
          </View>          

      </ScrollView>
  );
};

export default withFormik({
    mapPropsToValues: ({
        postAdd, categoryList, subCategoryList, addPost
    }) => ({
        id_sub_category: 1,
        id_user: 1,
        title: "title11",
        description: "description1",
        place: "place1",
        date: "2019-10-10",
        price: 100,
        country: "UAE",
        city: "Dubai",
        contact: 1,
        file_0 : null,
        file_1 : null,
        file_2 : null,
        addPost
    }),
    validateOnChange: false,

    validationSchema: Yup.object().shape({
     /*   title: Yup.string().required("Required"),
        description: Yup.string().required("Required"),
        place: Yup.string().required("Required"),
        date: Yup.string().required("Required"),
        price: Yup.string().required("Required"),
        country: Yup.string().required("Required"),
        city: Yup.string().required("Required")
    */}),

    handleSubmit: (values, { props }) => {
      let data = new FormData();
      data.append("id_sub_category", values.id_sub_category);
      data.append("id_user", values.id_user);
      data.append("title", values.title);
      data.append("description", values.description);
      data.append("place", values.place);
      data.append("date", values.date);
      data.append("price", values.price);
      data.append("country", "UAE");
      data.append("city", values.city);
      data.append("contact", values.contact);
      data.append("files[]", values.file_0);
      data.append("files[]", values.file_1);
      data.append("files[]", values.file_2);
      
      return values.addPost({ data });
    }
  })(UploadFrm);

const styles = StyleSheet.create({
  box:{
    padding:10,
  },
  img:{
    height:300,
    width:300,
    borderRadius:10,
    borderWidth:1,
  },
});
