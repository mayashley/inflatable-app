import React from "react";
import styles from "../../css/items.module.css";
import SingleItem from "./SingleItem";
// import Title from '../../constants/Title'

const ItemsList = ({ itemsArray }) => {
  return (
    <section className={styles.itemsWrapper}>
      {/* <Title title="Bounce House Combos"/> */}
      <div className={styles.center}>
        {itemsArray.map((item, index) => {
          return <SingleItem key={index} item={item} />;
        })}
      </div>
    </section>
  );
};

export default ItemsList;
