import { pushContentfulData } from "../actions";

export function getContent() {
  const {
    REACT_APP_CON_BASE_URL,
    REACT_APP_CON_SPACE_ID,
    REACT_APP_CON_ACC_TOK,
  } = process.env;
  const url = `${REACT_APP_CON_BASE_URL}/spaces/${REACT_APP_CON_SPACE_ID}/entries?access_token=${REACT_APP_CON_ACC_TOK}`;
  const defaultHeaders = {
    "Content-Type": "application/json",
  };

  return fetch(url, { method: "GET", defaultHeaders })
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });
}

export function getFeaturedContent(allContent) {
  return (dispatch) => {
    let featuredArray = [];
    allContent
      .filter((item) => item.fields.featured)
      .forEach((fi) =>
        featuredArray.push({ ...fi.fields, type: fi.sys.contentType.sys.id })
      );

    dispatch(pushContentfulData({ featuredItems: featuredArray }));
  };
}

export function getImage(asset_id) {
  const {
    REACT_APP_CON_BASE_URL,
    REACT_APP_CON_SPACE_ID,
    REACT_APP_CON_ACC_TOK,
  } = process.env;
  const url = `${REACT_APP_CON_BASE_URL}/spaces/${REACT_APP_CON_SPACE_ID}/assets/${asset_id}?access_token=${REACT_APP_CON_ACC_TOK}`;
  const defaultHeaders = {
    "Content-Type": "application/json",
  };

  return fetch(url, { method: "GET", defaultHeaders })
    .then((res) => res.json())
    .then((response) => {
      // console.log(response);
      return response.fields.file.url;
    })
    .catch((err) => {
      throw err;
    });
}
