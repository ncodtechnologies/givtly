import { createStackNavigator, createAppContainer } from "react-navigation";
import UploadPostDt from "../components/chat";
import ChatList from "../components/chat/chatList";
import ChatDt from "../components/chat/chatDt";

const root = createStackNavigator({
  //UploadPostDt: UploadPostDt,
  ChatList: ChatList,
  ChatDt: ChatDt,
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
