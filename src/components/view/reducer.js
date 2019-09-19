import {
  PostListState,
  CatListState,
  SubCatListState
} from "./action";

export const postList = (state = initialPostListState, action) => {
  switch (action.type) {
    case PostListState.LOADING:
      return { ...state, loading: action.state };
    case PostListState.DONE:
      return { ...state, data: action.state };
    case PostListState.SUCCESS:
      return { ...state, success: action.state };
    case PostListState.ERROR:
      return { ...state, error: action.state };
    default:
      return state;
  }
};

export const categoryList = (state = initialCatListState, action) => {
  switch (action.type) {
    case CatListState.LOADING:
      return { ...state, loading: action.state };
    case CatListState.DONE:
      return { ...state, data: action.state };
    case CatListState.SUCCESS:
      return { ...state, success: action.state };
    case CatListState.ERROR:
      return { ...state, error: action.state };
    default:
      return state;
  }
};

export const subCategoryList = (state = initialSubCatListState, action) => {
  switch (action.type) {
    case SubCatListState.LOADING:
      return { ...state, loading: action.state };
    case SubCatListState.DONE:
      return { ...state, data: action.state };
    case SubCatListState.SUCCESS:
      return { ...state, success: action.state };
    case SubCatListState.ERROR:
      return { ...state, error: action.state };
    default:
      return state;
  }
};

const initialCatListState = {
  loading: false,
  data: null,
  success: null,
  error: null
};

const initialSubCatListState = {
  loading: false,
  data: null,
  success: null,
  error: null
};

const initialPostListState = {
  loading: false,
  data: null,
  success: null,
  error: null
};
