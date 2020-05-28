import { addItem, setInitialList, removeItem } from "../actions";
import store from "store";

export const addToList = (item) => {
  return (dispatch, getState) => {
    const list = getState().list;

    const cookieList = [...list, item];
    console.log(cookieList);

    store.set("savedList", cookieList);
    dispatch(addItem(item));
  };
};

export const removeFromList = (item) => {
  return (dispatch, getState) => {
    const list = getState().list;

    const cookieList = list.filter((li) => li.slug !== item.slug);
    console.log(cookieList);

    store.set("savedList", cookieList);
    dispatch(removeItem(item));
  };
};

export const getListFromCookies = () => {
  return (dispatch) => {
    const fromCookies = store.get("savedList");
    console.log("fromCookies", fromCookies);
    if (!!fromCookies && fromCookies.length > 0) {
      dispatch(setInitialList(fromCookies));
    }
  };
};
