import React from "react";
import { connect } from "react-redux";
import Title from "../constants/Title";
import styles from "../css/items.module.css";
import ItemsList from "../components/storeItems/ItemsList";

const WaterFriendly = ({ appState }) => {
  return (
    <div className={styles.itemsWrapper}>
      <Title title="Water Friendly Inflatables" />
      <ItemsList itemsArray={appState.contentfulData.water} />
    </div>
  );
};
export default connect((state) => ({
  appState: state,
}))(WaterFriendly);
