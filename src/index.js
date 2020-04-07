import './ReactotronConfig'
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk  from 'redux-thunk';
import mainReducer from "./redux/reducer";
import Reactotron from './ReactotronConfig'
import App from "./App";
import "./index.css";

import * as serviceWorker from "./serviceWorker";

// const store = createStore(rootReducer, Reactotron.createEnhancer())
const store = createStore(mainReducer, compose(applyMiddleware(thunk), Reactotron.createEnhancer()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
