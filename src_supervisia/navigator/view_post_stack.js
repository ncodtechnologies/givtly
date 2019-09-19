import { createStackNavigator, createAppContainer } from "react-navigation";
import PostList from "../components/view/postList";
import PostDt from "../components/view/postDt";
import CategoryList from "../components/view/categoryList";
import SubCategoryList from "../components/view/subCategoryList";

const root = createStackNavigator({
  CategoryList: CategoryList,
  PostList: PostList,
  PostDt: PostDt,
  SubCategoryList: SubCategoryList
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
