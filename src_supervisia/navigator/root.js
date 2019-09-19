import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';
import ViewPostStack from "./view_post_stack";
import UploadPost from "./upoad_post_stack";
import Profile from "./profile_stack";
import Notification from "./notification_stack";
//import Chat from "../components/chat/chatDt";
import Chat from "./chat_stack";
import React, { Component } from 'react';
import { View, Text } from "react-native";

const root = createBottomTabNavigator({
  Home: {
    screen: ViewPostStack
  },
  Notification: {
    screen: Notification
  },
  Upload: {
    screen: UploadPost
  },
  Chat: {
    screen: Chat
  },
  Profile: {
    screen: Profile
  }
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      let size = 25;
      if (routeName === 'Home') {
        
        // Sometimes we want to add badges to some icons. 
        // You can check the implementation below.
        iconName = `ios-home`;
      } else if (routeName === 'Notification') {
        IconComponent = HomeIconWithBadge; 
        iconName = `ios-notifications`;
      } else if (routeName === 'Upload') {
        size=35;
        iconName = `ios-add-circle`;
      } else if (routeName === 'Chat') {
        iconName = `ios-chatbubbles`;
      } else if (routeName === 'Profile') {
        iconName = `ios-person`;
      }

      // You can return any component that you like here!
      return <IconComponent name={iconName} size={size} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#EF0A05',
    inactiveTintColor: 'gray',
    showLabel : false
  },
});

class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              // /If you're using react-native < 0.57 overflow outside of the parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const HomeIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={2} />;
};

const App =  createAppContainer(root);

export default App;
