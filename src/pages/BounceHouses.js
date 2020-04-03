import React from "react";
import { connect } from "react-redux";
import Title from "../constants/Title";
import styles from "../css/items.module.css";
import ItemsList from "../components/storeItems/ItemsList";

const BounceHouses = ({ appState }) => {
  return (
    <div className={styles.itemsWrapper}>
      <Title title="Bounce Houses" />
      <ItemsList itemsArray={appState.contentfulData.bounce} />
    </div>
  );
};

export default connect(state => ({
  appState: state
}))(BounceHouses);
