import { createStackNavigator, createAppContainer } from "react-navigation";
import ChatList from "../components/chat/chatList";
import UploadPostDt from "../components/chat/";

const root = createStackNavigator({
  ChatList:{
       screen :ChatList
      },
  UploadPostDt:{
       screen : UploadPostDt
  },
},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#EF0A05',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

const App =  createAppContainer(root);

export default App;
