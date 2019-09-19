import { createStackNavigator, createAppContainer } from "react-navigation";
import UploadPostDt from "../components/chat";

const root = createStackNavigator({
  UploadPostDt: UploadPostDt
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
