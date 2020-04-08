import React from 'react'
import ItemsList from "../components/storeItems/ItemsList";
import styles from "../css/items.module.css";
import { connect } from "react-redux";
import Title from "../constants/Title";


const DunkBooth = ({appState}) => {
    return(
    <div className={styles.itemsWrapper}>
      <Title title="Dunk Booth" />
      <ItemsList itemsArray={appState.contentfulData.games} />
    </div>
  );
};
export default connect(state => ({
    appState: state
  }))(DunkBooth);