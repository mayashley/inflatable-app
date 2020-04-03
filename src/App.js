import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BounceCombo from "./pages/BounceCombo";
import BounceHouses from "./pages/BounceHouses";
import HomePage from "./pages/HomePage";
import Interactives from './pages/Interactives';
import ObstacleCourse from './pages/ObstacleCourse';
import SelfPickUp from './pages/SelfPickUp'


import "./App.css";
import { getContent, getFeaturedContent } from "./redux/managers/contentfulService";
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
      water: []
    };

    try {
      const data = await getContent();
      dispatch(getFeaturedContent(data.items));
      data.items.forEach(item => {
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
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/BounceCombo" exact component={BounceCombo} />
          <Route path="/BounceCombo/:cat/:id" component={ProductTemplate} />
          <Route path="/BounceHouses" exact component={BounceHouses} />
          <Route path="/BounceHouses/:cat/:id" component={ProductTemplate} />
          <Route path="/Interactives" exact component={Interactives} />
          <Route path="/Interactives/:cat/:id" component={ProductTemplate} />
          <Route path="/ObstacleCourse" exact component={ObstacleCourse} />
          <Route path="/ObstacleCourse/:cat/:id" component={ProductTemplate} />
          <Route path="/SelfPickUp" exact component={SelfPickUp} />
          <Route path="/SelfPickUp/:cat/:id" component={ProductTemplate} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default connect(state => ({
  appState: state
}))(App);
