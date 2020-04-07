import * as actionTypes from "./actionTypes";

export function pushContentfulData(data) {
  return {
    type: actionTypes.PUSH_CONTENTFUL_DATA,
    data,
  };
}
export function pushFeaturedData(data) {
  return {
    type: actionTypes.PUSH_FEATURED_DATA,
    data,
  };
}
export function contentfulError(err) {
  return {
    type: actionTypes.CONTENTFUL_ERROR,
    err,
  };
}
export function addItem(data) {
  return {
    type: actionTypes.ADD_ITEM,
    data,
  };
}

export function removeItem(data) {
  return {
    type: actionTypes.DELETE_ITEM,
    data,
  };
}

// export function emptyList() {

// }
