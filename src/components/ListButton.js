import React from "react";
import { Link } from "react-router-dom";

import { IoIosListBox } from "react-icons/io";
import { IconContext } from "react-icons";
import styles from "../css/ListButton.module.css";

const ListButton = ({ itemCount }) => {
  return (
    <IconContext.Provider value={{ color: "#6caa14", size: "36px" }}>
      <Link to="/list" className={styles.container}>
        <IoIosListBox />
        <p>{itemCount} items on list</p>
      </Link>
    </IconContext.Provider>
  );
};

ListButton.propTypes = {};

export default ListButton;
