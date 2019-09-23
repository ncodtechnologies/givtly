import {
  SendChatState,
  getChatState
} from "./action";

export const chatSend = (state = initialSencdChatState, action) => {
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

export const chatGet = (state = initialGetChatState, action) => {
  switch (action.type) {
    case getChatState.LOADING:
      return { ...state, loading: action.state };
    case getChatState.DONE:
      return { ...state, data: action.state };
    case getChatState.SUCCESS:
      return { ...state, success: action.state };
    case getChatState.ERROR:
      return { ...state, error: action.state };
    default:
      return state;
  }
};

const initialSencdChatState = {
  loading: false,
  data: null,
  success: null,
  error: null
};

const initialGetChatState = {
  loading: false,
  data: null,
  success: null,
  error: null
};
