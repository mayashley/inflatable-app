import React from 'react'
import { connect } from "react-redux";
import Title from '../constants/Title'
import styles from '../css/items.module.css'
import ItemsList from '../components/storeItems/ItemsList'



const Slides = ({appState}) => {
   
    return (
             <div className={styles.itemsWrapper}>
            <Title  title="Slides"/>
            <ItemsList itemsArray={appState.contentfulData.slides}/>
    </div>
  );
};
export default connect(state =>({
  appState: state
}))(Slides);