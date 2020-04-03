import React from 'react'
import Title from '../constants/Title'
import styles from '../css/items.module.css'
import ItemsList from '../components/storeItems/ItemsList'
import { connect } from "react-redux";

const SelfPickUp = ({appState}) => {
    
    return (
       
           <div className={styles.itemsWrapper}>
            <Title  title="Inflatables Avilable For Self Pick-Up"/>
            <ItemsList itemsArray={appState.contentfulData.self}/>
    </div>
  );
};
export default connect(state =>({
  appState: state
}))(SelfPickUp);