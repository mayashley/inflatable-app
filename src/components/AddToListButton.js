import React from "react";
import PropTypes from "prop-types";
import { IconContext } from "react-icons";
import { MdAddCircle, MdCheckCircle } from "react-icons/md";
import styles from "../css/AddToListButton.module.css";

const AddToListButton = ({ added, handleOnClick }) => {
  return (
    <IconContext.Provider
      value={{ color: added ? "green" : "rgb(255, 123, 0)", size: "20px" }}
    >
      <button
        disabled={added}
        className={added ? styles.addedContainer : styles.container}
        onClick={handleOnClick}
      >
        {added ? (
          <>
            <MdCheckCircle />
            <p>Added to List</p>
          </>
        ) : (
          <>
            <MdAddCircle />
            <p>Add to List</p>
          </>
        )}
      </button>
    </IconContext.Provider>
  );
};

AddToListButton.propTypes = {};

export default AddToListButton;
