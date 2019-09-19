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
    if (checkResult(result, dispatch, error => setInStore(error, type.ERROR))) {
      dispatch(setInStore(result.data, type.DONE));
      dispatch(setInStore(true, type.SUCCESS));
    } else {
      dispatch(setInStore(false, type.SUCCESS));
    }
  } catch (error) {
    dispatch(setInStore(false, type.SUCCESS));
    dispatch(setInStore(error, type.ERROR));
  }
  dispatch(setInStore(false, type.LOADING));
};

export const getPostList = payload => dispatch => {
  console.log(GET_POST_LIST+"?filter="+payload);
  return Fetcher(
    async () => {
      const result = await fetch(GET_POST_LIST+"?filter="+payload, {
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
  console.log(GET_CAT_LIST+"?section="+payload);
  return Fetcher(
    async () => {
      const result = await fetch(GET_CAT_LIST+"?section="+payload, {
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

export const getSubCategoryList = payload => dispatch => {
  console.log(GET_SUBCAT_LIST+"?id_category="+payload);
  return Fetcher(
    async () => {
      const result = await fetch(GET_SUBCAT_LIST+"?id_category="+payload, {
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