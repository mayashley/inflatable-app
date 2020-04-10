import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "../css/List.module.css";
import ListItem from "../components/ListItem";

class List extends Component {
  render() {
    const { appState } = this.props;
    return (
      <div className={styles.mainContainer}>
        <div className={styles.leftColumn}>
          {appState.list.map((item, index) => {
            return <ListItem item={item} key={index} />;
          })}
        </div>
      </div>
    );
  }
}

export default connect((state) => ({
  appState: state,
}))(List);
