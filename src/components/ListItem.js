import React, { Component } from "react";
import styles from "../css/ListItem.module.css";
import { getImage } from "../redux/managers/contentfulService";
import { IconContext } from "react-icons";
import { FaTrash } from "react-icons/fa";
import { removeFromList } from "../redux/managers/ListManager";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImg: null,
    };
  }
  componentDidMount() {
    this.fetchImages();
  }

  componentDidUpdate(prevProps) {
    const { item } = this.props;
    if (prevProps.item.slug !== item.slug) {
      this.fetchImages();
    }
  }
  
  fetchImages = async () => {
    const { item } = this.props;

    this.setState({
      selectedImg: await getImage(item.images[0].sys.id),
    });
  };

  removeFromList = () => {
    const { dispatch, item } = this.props;

    dispatch(removeFromList(item));
  };

  render() {
    const { selectedImg } = this.state;
    const { item } = this.props;

    return (
      <div className={styles.itemContainer}>
        <div>
          <img className={styles.smallImg} src={selectedImg} alt="" />
        </div>
        <div className={styles.nameContainer}>
          <p className={styles.itemText}>{item.name}</p>
        </div>
        <div className={styles.row}>
          <p className={styles.itemText}>${item.price}</p>
          <IconContext.Provider
            value={{
              size: "24px",
              color: "red",
            }}
          >
            <button
              className={styles.trashButton}
              onClick={this.removeFromList}
            >
              <FaTrash />
            </button>
          </IconContext.Provider>
        </div>
      </div>
    );
  }
}

export default ListItem;
