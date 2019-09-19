import {
  addPostState
} from "./action";

export const postAdd = (state = initialAddPostState, action) => {
  switch (action.type) {
    case addPostState.LOADING:
      return { ...state, loading: action.state };
    case addPostState.DONE:
      return { ...state, data: action.state };
    case addPostState.SUCCESS:
      return { ...state, success: action.state };
    case addPostState.ERROR:
      return { ...state, error: action.state };
    default:
      return state;
  }
};

const initialAddPostState = {
  loading: false,
  data: [],
  success: null,
  error: null
};
