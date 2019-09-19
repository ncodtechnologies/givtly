import storage from "redux-persist/es/storage";
import { persistCombineReducers } from "redux-persist";
import { postList, categoryList, subCategoryList} from "../components/view/reducer";
import { chatList,chatDt,sendChat} from "../components/chat/reducer";


const config = {
  key: "primary",

  storage,
  blacklist: [
    "postList",
    "categoryList",
    "subCategoryList",
    "chatList",
    "chatDt",
    "sendChat"
  ]
};

const combinedReducers = {
  postList,
  categoryList,
  subCategoryList,
  chatList,
  chatDt,
  sendChat
};

export default persistCombineReducers(config, combinedReducers);
