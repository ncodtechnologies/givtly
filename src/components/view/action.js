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
        method: "GET",
        headers: {
          'Authorization': 'Bearer ' + Base64.btoa("5d85ddda36904e245450069f")
        }
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
        method: "GET",
        headers: {
          'Authorization': 'Bearer ' + Base64.btoa("5d85ddda36904e245450069f")
        }
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
        method: "GET",
        headers: {
          'Authorization': 'Bearer ' + Base64.btoa("5d85ddda36904e245450069f")
        }
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


const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
const Base64 = {
  btoa: (input:string = '')  => {
    let str = input;
    let output = '';

    for (let block = 0, charCode, i = 0, map = chars;
    str.charAt(i | 0) || (map = '=', i % 1);
    output += map.charAt(63 & block >> 8 - i % 1 * 8)) {

      charCode = str.charCodeAt(i += 3/4);

      if (charCode > 0xFF) {
        throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
      }
      
      block = block << 8 | charCode;
    }
    
    return output;
  },

  atob: (input:string = '') => {
    let str = input.replace(/=+$/, '');
    let output = '';

    if (str.length % 4 == 1) {
      throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
    }
    for (let bc = 0, bs = 0, buffer, i = 0;
      buffer = str.charAt(i++);

      ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
        bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
    ) {
      buffer = chars.indexOf(buffer);
    }

    return output;
  }
};