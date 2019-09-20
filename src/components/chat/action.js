import {
  SEND_CHAT_URL
} from "../../constants";

export const SendChatState = {
  LOADING: "SEND_CHAT_LOADING",
  SUCCESS: "SEND_CHAT_SUCCESS",
  ERROR: "SEND_CHAT_ERROR",
  DONE: "SEND_CHAT_DONE"
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
    console.log("givtly=>", JSON.stringify(error));
    dispatch(setInStore(false, type.SUCCESS));
    dispatch(setInStore(error, type.ERROR));
  }
  dispatch(setInStore(false, type.LOADING));
};

export const sendChat = payload => dispatch => {
  let data = {};
  data.sender = "5d83c99a7298132a782a0327";
  data.receiver ="5d83c99a7298132a782a0328";
  data.message = "This is a msg";

 // const { data } = payload;
  const body = JSON.stringify(data);
  console.log("givtly=>", JSON.stringify(body));
  return Fetcher (
    async () => {
      const result = await fetch(SEND_CHAT_URL, {
        method: "POST",
        body,
        headers: {"Content-Type": "application/json"}
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