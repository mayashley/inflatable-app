import React from 'react'
import styles from '../css/items.module.css'
import ItemsList from '../components/storeItems/ItemsList'
import Title from '../constants/Title'
import { connect } from "react-redux";



 const ObstacleCourse = ({appState}) => {
    return (
            <div className={styles.itemsWrapper}>
            <Title  title="Obstacle Courses"/>
            <ItemsList itemsArray={appState.contentfulData.obstacles}/>
    </div>
  );
};
export default connect(state =>({
  appState: state
}))(ObstacleCourse);