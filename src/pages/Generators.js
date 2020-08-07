import React from "react";
import { connect } from "react-redux";
import Title from "../constants/Title";
import styles from "../css/items.module.css";
import ItemsList from "../components/storeItems/ItemsList";

const Generators = ({ appState }) => {
  return (
    <div className={styles.itemsWrapper}>
      <Title title="Generators" />
      <ItemsList itemsArray={appState.contentfulData.generator} />
    </div>
  );
};

export default connect(state => ({
  appState: state
}))(Generators);