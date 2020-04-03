import React from "react";
import styles from "../../css/items.module.css";
import SingleItem from "./SingleItem";


const ItemsList = ({ itemsArray }) => {
  return (
    <section className={styles.itemsWrapper}>
      <div className={styles.center}>
        {itemsArray.map((item, index) => {
          return <SingleItem key={index} item={item} />;
        })}
      </div>
    </section>
  );
};

export default ItemsList;
