import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { NavigationActions } from "react-navigation";
import IconAntDesign from "react-native-vector-icons/AntDesign";
export default class FooterTabs extends Component {


  navigateToScreen = route => () => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: route})
      ]
    })

    this.props.navigation.dispatch(resetAction);
  };

  render() {
    return (
      <View styele={{ flexDirection:"row", height: 60 }} >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Profile")}
            style={{ alignItems: "center", flex: 1 }}
          >
            <View style={{ padding: 5 }}>
              <IconAntDesign
                style={{ alignSelf: "center", color: "#003366", fontSize: 23 }}
                name="dashboard"
              />
              <Text
                style={{ alignSelf: "center", color: "#003366", fontSize: 13 }}
              >
                Dashboard
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: "center",
              flex: 1,
              borderRightColor: "#D7DBDD",
              borderRightWidth: 1,
              borderLeftColor: "#D7DBDD",
              borderLeftWidth: 1
            }}
            onPress={() => this.props.navigation.navigate("SelectService")}
          >
            <View style={{ padding: 5 }}>
              <IconAntDesign
                style={{ alignSelf: "center", color: "#003366", fontSize: 23 }}
                name="addfile"
              />
              <Text
                style={{ alignSelf: "center", color: "#003366", fontSize: 13 }}
              >
                Request a service
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ alignItems: "center", flex: 1 }}
          >
            <View style={{ padding: 5 }}>
              <IconAntDesign
                style={{ alignSelf: "center", color: "#003366", fontSize: 23 }}
                name="filetext1"
              />
              <Text
                style={{ alignSelf: "center", color: "#003366", fontSize: 13 }}
              >
                My Requests
              </Text>
            </View>
          </TouchableOpacity>
          </View>
    );
  }
}
