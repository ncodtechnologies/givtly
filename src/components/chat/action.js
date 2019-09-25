import {
  SEND_CHAT_URL
} from "../../constants";

export const SendChatState = {
  LOADING: "SEND_CHAT_LOADING",
  SUCCESS: "SEND_CHAT_SUCCESS",
  ERROR: "SEND_CHAT_ERROR",
  DONE: "SEND_CHAT_DONE"
};

export const getChatState = {
  LOADING: "GET_CHAT_LOADING",
  SUCCESS: "GET_CHAT_SUCCESS",
  ERROR: "GET_CHAT_ERROR",
  DONE: "GET_CHAT_DONE"
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

export const sendChat = data => dispatch => {
  const body = JSON.stringify(data);
  console.log("givtly=>", JSON.stringify(body));
  return Fetcher (
    async () => {
      const result = await fetch(SEND_CHAT_URL, {
        method: "POST",
        body
      });
      return result.json().then(data => ({
        data: data,
        status: result.ok
      }));
    },
    SendChatState,
    dispatch
  );
};

export const getChat = payload => dispatch => {
  console.log("givtly=>", JSON.stringify(payload));
  return Fetcher(
    async () => {
      const result = await fetch(`${SEND_CHAT_URL}/${payload}`, {
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
    getChatState,
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