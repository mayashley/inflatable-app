import React from "react";
import Title from "../constants/Title";
import styles from "../css/items.module.css";
import { connect } from "react-redux";
import ItemsList from "../components/storeItems/ItemsList";

const BounceCombo = ({ appState }) => {
  return (
    <div className={styles.itemsWrapper}>
      <Title title="Bounce House Combos" />
      <ItemsList itemsArray={appState.contentfulData.combos}/>
    </div>
  );
};
export default connect(state =>({
  appState: state
}))(BounceCombo);
