import {  
  ChatListState,
  ChatDtState,
  SendChatState
} from "./action";

export const chatList = (state = initialChatListState, action) => {
  switch (action.type) {
    case ChatListState.LOADING:
      return { ...state, loading: action.state };
    case ChatListState.DONE:
      return { ...state, data: action.state };
    case ChatListState.SUCCESS:
      return { ...state, success: action.state };
    case ChatListState.ERROR:
      return { ...state, error: action.state };
    default:
      return state;
  }
};

export const chatDt = (state = initialChatDtState, action) => {
  switch (action.type) {
    case ChatDtState.LOADING:
      return { ...state, loading: action.state };
    case ChatDtState.DONE:
      return { ...state, data: action.state };
    case ChatDtState.SUCCESS:
      return { ...state, success: action.state };
    case ChatDtState.ERROR:
      return { ...state, error: action.state };
    default:
      return state;
  }
};

export const sendChat = (state = initialSendChatState, action) => {
  switch (action.type) {
    case SendChatState.LOADING:
      return { ...state, loading: action.state };
    case SendChatState.DONE:
      return { ...state, data: action.state };
    case SendChatState.SUCCESS:
      return { ...state, success: action.state };
    case SendChatState.ERROR:
      return { ...state, error: action.state };
    default:
      return state;
  }
};

const initialChatListState = {
  loading: false,
  data: null,
  success: null,
  error: null
};

const initialChatDtState = {
  loading: false,
  data: null,
  success: null,
  error: null
};

const initialSendChatState = {
  loading: false,
  data: null,
  success: null,
  error: null
};
