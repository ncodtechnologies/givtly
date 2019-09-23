import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "../components/login";

const root = createStackNavigator({
  Login: Login
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
