import {
  GETReqState
} from "./action";

export const postList = (state = initialGETReqState, action) => {
  switch (action.type) {
    case GETReqState.LOADING:
      return { ...state, loading: action.state };
    case GETReqState.DONE:
      return { ...state, data: action.state };
    case GETReqState.SUCCESS:
      return { ...state, success: action.state };
    case GETReqState.ERROR:
      return { ...state, error: action.state };
    default:
      return state;
  }
};

const initialGETReqState = {
  loading: false,
  data: null,
  success: null,
  error: null
};

