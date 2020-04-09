import React from 'react'
import ItemsList from "../components/storeItems/ItemsList";
import styles from "../css/items.module.css";
import { connect } from "react-redux";
import Title from "../constants/Title";

 const TablesAndChairs = ({appState}) => {
  return(
    <div className={styles.itemsWrapper}>
      <Title title="Tables and Chairs" />
      <ItemsList itemsArray={appState.contentfulData.tablesandchairs} />
    </div>
  );
};
export default connect(state => ({
    appState: state
  }))(TablesAndChairs);