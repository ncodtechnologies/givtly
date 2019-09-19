import {
  GET_CHAT_LIST,
  GET_CHAT_DT,
  GET_SEND_CHAT
} from "../../constants";


export const ChatListState = {
  LOADING: "CHAT_LIST_LOADING",
  SUCCESS: "CHAT_LIST_SUCCESS",
  ERROR: "CHAT_LIST_ERROR",
  DONE: "CHAT_LIST_DONE"
};

export const ChatDtState = {
  LOADING: "CHAT_DT_LOADING",
  SUCCESS: "CHAT_DT_SUCCESS",
  ERROR: "CHAT_DT_ERROR",
  DONE: "CHAT_DT_DONE"
};

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


export const getChatList = payload => dispatch => {
  console.log(GET_CHAT_LIST+"?id_user="+payload);
  return Fetcher(
    async () => {
      const result = await fetch(GET_CHAT_LIST+"?id_user="+payload, {
        method: "GET"
      });
      return result.json().then(data => ({
        data: data,
        status: result.ok
      }));
    },
    ChatListState,
    dispatch
  );
};

export const getChatDt = payload => dispatch => {
  console.log(GET_CHAT_DT+"?id_sender="+payload);
  return Fetcher(
    async () => {
      const result = await fetch(GET_CHAT_DT+"?id_sender="+payload, {
        method: "GET"
      });
      return result.json().then(data => ({
        data: data,
        status: result.ok
      }));
    },
    ChatDtState,
    dispatch
  );
};

export const getSendChat = (id_sender, message) => dispatch => {
  console.log(GET_SEND_CHAT+"?id_sender="+id_sender);
  return Fetcher(
    async () => {
      const result = await fetch(GET_SEND_CHAT+"?id_sender="+id_sender+"&message="+message, {
        method: "GET"
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