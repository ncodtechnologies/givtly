import storage from "redux-persist/es/storage";
import { persistCombineReducers } from "redux-persist";
import {
  postList, categoryList, subCategoryList
} from "../components/view/reducer";
import {
  postAdd
} from "../components/upload/reducer";

const config = {
  key: "primary",

  storage,
  blacklist: [
    "postList",
    "categoryList",
    "subCategoryList",
    "postAdd"
  ]
};

const combinedReducers = {
  postList,
  categoryList,
  subCategoryList,
  postAdd
};

export default persistCombineReducers(config, combinedReducers);
