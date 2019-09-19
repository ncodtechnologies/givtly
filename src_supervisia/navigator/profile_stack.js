import { createStackNavigator, createAppContainer } from "react-navigation";
import UploadPostDt from "../components/profile";

const root = createStackNavigator({
  UploadPostDt: UploadPostDt
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 });

const App =  createAppContainer(root);

export default App;
