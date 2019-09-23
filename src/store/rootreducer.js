import storage from "redux-persist/es/storage";
import { persistCombineReducers } from "redux-persist";
import {
  postList, categoryList, subCategoryList
} from "../components/view/reducer";
import {
  postAdd
} from "../components/upload/reducer";
import {
  chatGet,
  chatSend
} from "../components/chat/reducer"

const config = {
  key: "primary",

  storage,
  blacklist: [
    "postList",
    "categoryList",
    "subCategoryList",
    "postAdd",
    "chatGet",
    "chatSend"
  ]
};

const combinedReducers = {
  postList,
  categoryList,
  subCategoryList,
  postAdd,
  chatGet,
  chatSend
};

export default persistCombineReducers(config, combinedReducers);
