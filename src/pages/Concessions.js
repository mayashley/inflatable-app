import React from 'react'
import ItemsList from "../components/storeItems/ItemsList";
import styles from "../css/items.module.css";
import { connect } from "react-redux";
import Title from "../constants/Title";

const Concessions = ({appState}) => {
    return(
    <div className={styles.itemsWrapper}>
      <Title title="Concessions" />
      <ItemsList itemsArray={appState.contentfulData.concessions} />
    </div>
  );
};
export default connect(state => ({
    appState: state
  }))(Concessions);