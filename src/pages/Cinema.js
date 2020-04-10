import React from 'react'
import { connect } from "react-redux";
import Title from '../constants/Title'
import styles from '../css/items.module.css'
import ItemsList from '../components/storeItems/ItemsList'

 const Cinema = ({appState}) => {
    return (
        <div className={styles.itemsWrapper}>
       <Title  title="Portable Cinema"/>
       <ItemsList itemsArray={appState.contentfulData.cinema}/>
</div>
);
};
export default connect(state =>({
appState: state
}))(Cinema);