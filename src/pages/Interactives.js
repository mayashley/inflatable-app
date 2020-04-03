import React from 'react'
import { connect } from "react-redux";
import Title from '../constants/Title'
import styles from '../css/items.module.css'
import ItemsList from '../components/storeItems/ItemsList'

 const Interactives = ({appState}) => {
    return (
            <div className={styles.itemsWrapper}>
            <Title  title="Inflatable Interactives"/>
            <ItemsList itemsArray={appState.contentfulData.interactives}/>
    </div>
  );
};
export default connect(state =>({
  appState: state
}))(Interactives);