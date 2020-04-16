import {
  PUSH_CONTENTFUL_DATA,
  PUSH_FEATURED_DATA,
  ADD_ITEM,
  DELETE_ITEM,
  CONTENTFUL_ERROR,
  SET_INITIAL_LIST,
} from "./actionTypes";

const initialState = {
  contentfulData: {
    bounce: [],
    combos: [],
    interactives: [],
    obstacles: [],
    self: [],
    slides: [],
    water: [],
    featuredItems: [],
  },
  list: [],
  isLoading: true,
  error: null,
};

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case PUSH_FEATURED_DATA:
      return {
        ...state,
        contentfulData: {
          ...state.contentfulData,
          ...action.data,
        },
      };
    case PUSH_CONTENTFUL_DATA:
      return {
        ...state,
        contentfulData: {
          ...state.contentfulData,
          ...action.data,
        },
        isLoading: false,
      };
    case CONTENTFUL_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.err || true,
      };
    case ADD_ITEM:
      return {
        ...state,
        list: [...state.list, action.data],
      };
    case DELETE_ITEM:
      return {
        ...state,
        list: state.list.filter((item) => item.slug !== action.data.slug),
      };
    case SET_INITIAL_LIST:
      return {
        ...state,
        list: action.data,
      };
    default:
      return state;
  }
}

export default mainReducer;
