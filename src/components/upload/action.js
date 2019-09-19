import {
  ADD_POST_URL
} from "../../constants";

export const addPostState = {
  LOADING: "ADD_POST_LOADING",
  SUCCESS: "ADD_POST_SUCCESS",
  ERROR: "ADD_POST_ERROR",
  DONE: "ADD_POST_DONE"
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
    console.log("givtly=>", JSON.stringify(result));
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

export const addPost = payload => dispatch => {
  const { data } = payload;
  const body = data;
  console.log("givtly=>", body);
  return Fetcher (
    async () => {
      const result = await fetch(ADD_POST_URL, {
        method: "POST",
        body
      });
      return result.json().then(data => ({
        data: data,
        status: result.ok
      }));
    },
    addPostState,
    dispatch
  );
};
