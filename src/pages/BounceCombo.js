import React from "react";
import AllItems from "../components/storeItems/AllItems";
import Title from "../constants/Title";
import styles from "../css/items.module.css";

const BounceCombo = () => {
  return (
    <div className={styles.itemsWrapper}>
      <Title title="Bounce House Combos" />
      <AllItems />
    </div>
  );
};
export default BounceCombo;
