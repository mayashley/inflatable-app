import React from "react";
import { connect } from "react-redux";
import SingleItem from "../storeItems/SingleItem";
import Title from "../../constants/Title";
import styles from "../../css/items.module.css";

const FeaturedItems = ({ appState }) => {
  return (
    <section className={styles.itemsWrapper}>
      <Title title="Most popular rentals" />
      <div className={styles.center}>
        {appState.contentfulData.featuredItems.map((item, index) => {
          return <SingleItem key={index} item={item} />;
        })}
      </div>
    </section>
  );
};

export default connect((state) => ({
  appState: state,
}))(FeaturedItems);
