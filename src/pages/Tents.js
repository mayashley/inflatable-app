import React from 'react'
import { connect } from "react-redux";
import Title from '../constants/Title'
import styles from '../css/items.module.css'
import ItemsList from '../components/storeItems/ItemsList'

 const Tents = ({appState}) => {
    return (
        <div className={styles.itemsWrapper}>
       <Title  title="Tents"/>
       <ItemsList itemsArray={appState.contentfulData.tents}/>
</div>
);
};
export default connect(state =>({
appState: state
}))(Tents);