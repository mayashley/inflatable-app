import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BounceCombo from "./pages/BounceCombo";
import BounceHouses from "./pages/BounceHouses";
import HomePage from "./pages/HomePage";
import Interactives from "./pages/Interactives";
import ObstacleCourse from "./pages/ObstacleCourse";
import SelfPickUp from "./pages/SelfPickUp";
import Slides from "./pages/Slides";
import WaterFriendly from "./pages/WaterFriendly";
import Faq from "./pages/Faq";
import DunkBooth from "./pages/DunkBooth";
import Concessions from './pages/Concessions'

import "./App.css";
import {
  getContent,
  getFeaturedContent,
} from "./redux/managers/contentfulService";
import { pushContentfulData, contentfulError } from "./redux/actions";
import ProductTemplate from "./templates/ProductTemplate";

class App extends Component {
  componentDidMount() {
    this.fetchContent();
  }

  fetchContent = async () => {
    const { dispatch } = this.props;
    let categoryObject = {
      bounce: [],
      combos: [],
      interactives: [],
      obstacles: [],
      self: [],
      slides: [],
      water: [],
      games: [],
      concessions: [],
    };

    try {
      const data = await getContent();
      console.log(data);
      dispatch(getFeaturedContent(data.items));
      data.items.forEach((item) => {
        let dataObject = {
          ...item.fields,
          type: item.sys.contentType.sys.id,
        };

        return categoryObject[item.sys.contentType.sys.id].push(dataObject);
      });

      dispatch(pushContentfulData(categoryObject));
    } catch (err) {
      dispatch(contentfulError(err));
      console.log("Error in fetchContent", err);
    }
  };

  render() {
    const { appState } = this.props;

    console.log(appState.contentfulData);
    if (appState.isLoading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }

    return (
      <Router>
        <Navbar />
        <div className="App">
          <Switch>
            <Route path="/" exact component={HomePage} />
            {/* <Route path="/featured" exact component={HomePage} /> */}
            <Route path="/featured/:cat/:id" component={ProductTemplate} />
            <Route path="/BounceCombo" exact component={BounceCombo} />
            <Route path="/BounceCombo/:cat/:id" component={ProductTemplate} />
            <Route path="/BounceHouses" exact component={BounceHouses} />
            <Route path="/BounceHouses/:cat/:id" component={ProductTemplate} />
            <Route path="/Interactives" exact component={Interactives} />
            <Route path="/Interactives/:cat/:id" component={ProductTemplate} />
            <Route path="/ObstacleCourse" exact component={ObstacleCourse} />
            <Route
              path="/ObstacleCourse/:cat/:id"
              component={ProductTemplate}
            />
            <Route path="/SelfPickUp" exact component={SelfPickUp} />
            <Route path="/SelfPickUp/:cat/:id" component={ProductTemplate} />
            <Route path="/Slides" exact component={Slides} />
            <Route path="/Slides/:cat/:id" component={ProductTemplate} />
            <Route path="/WaterFriendly" exact component={WaterFriendly} />
            <Route path="/WaterFriendly/:cat/:id" component={ProductTemplate} />
            <Route path="/DunkBooth" exact component={DunkBooth} />
            <Route path="/DunkBooth/:cat/:id" component={ProductTemplate} />
            <Route path="/Concessions" exact component={Concessions} />
            <Route path="/Concessions/:cat/:id" component={ProductTemplate} />
            <Route path="/Faq" exact component={Faq} />
          </Switch>
        </div>

        <Footer />
      </Router>
    );
  }
}

export default connect((state) => ({
  appState: state,
}))(App);
