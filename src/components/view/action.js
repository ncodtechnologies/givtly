import {
  GET_POST_LIST,
  GET_CAT_LIST,
  GET_SUBCAT_LIST
} from "../../constants";

export const PostListState = {
  LOADING: "POST_LIST_LOADING",
  SUCCESS: "POST_LIST_SUCCESS",
  ERROR: "POST_LIST_ERROR",
  DONE: "POST_LIST_DONE"
};
export const CatListState = {
  LOADING: "CAT_LIST_LOADING",
  SUCCESS: "CAT_LIST_SUCCESS",
  ERROR: "CAT_LIST_ERROR",
  DONE: "CAT_LIST_DONE"
};
export const SubCatListState = {
  LOADING: "SUBCAT_LIST_LOADING",
  SUCCESS: "SUBCAT_LIST_SUCCESS",
  ERROR: "SUBCAT_LIST_ERROR",
  DONE: "SUBCAT_LIST_DONE"
};

export const checkResult = (result, dispatch, setError) => {
  console.log(result);
  if (result.status) {
    return true;
  }
  dispatch(setError(JSON.stringify(result.data)));
  return false;
};

export const setInStore = (state, type) => ({
  type,
  state
});
export const clearData = () => ({
  type: tokenState.CLEAR
});

const Fetcher = async (fetchData, type, dispatch) => {
  dispatch(setInStore(true, type.LOADING));
  dispatch(setInStore(null, type.ERROR));
  try {
    const result = await fetchData();
    console.log("givtly=>",JSON.stringify(result));
    if (checkResult(result, dispatch, error => setInStore(error, type.ERROR))) {
      dispatch(setInStore(result.data, type.DONE));
      dispatch(setInStore(true, type.SUCCESS));
    } else {
      dispatch(setInStore(false, type.SUCCESS));
    }
  } catch (error) {
    console.log("givtly=>err",(error));
    dispatch(setInStore(false, type.SUCCESS));
    dispatch(setInStore(error, type.ERROR));
  }
  dispatch(setInStore(false, type.LOADING));
};

export const getPostList = (id_sub_category, filter) => dispatch => {
  return Fetcher(
    async () => {
      console.log("givtly=>", `${GET_POST_LIST}/subcategory/${id_sub_category}`);
      const result = await fetch(`${GET_POST_LIST}/subcategory/${id_sub_category}`, {
        method: "GET"
      });
      return result.json().then(data => ({
        data: data,
        status: result.ok
      }));
    },
    PostListState,
    dispatch
  );
};

export const getCategoryList = payload => dispatch => {
  console.log("givtly=>1", `${GET_CAT_LIST}/${payload}`);
  return Fetcher(
    async () => {
      const result = await fetch(`${GET_CAT_LIST}/${payload}`, {
        method: "GET"
      });
      return result.json().then(data => ({
        data: data,
        status: result.ok
      }));
    },
    CatListState,
    dispatch
  );
};

export const getSubCategoryList = (id_category, filter) => dispatch => {
  console.log("givtly=>1", `${GET_SUBCAT_LIST}/${id_category}`);
  return Fetcher(
    async () => {
      const result = await fetch(`${GET_SUBCAT_LIST}/${id_category}`, {
        method: "GET"
      });
      return result.json().then(data => ({
        data: data,
        status: result.ok
      }));
    },
    SubCatListState,
    dispatch
  );
};