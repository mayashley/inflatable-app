import React, { Component } from "react";
import styles from "../css/ListItem.module.css";
import { getImage } from "../redux/managers/contentfulService";

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImg: null,
    };
  }
  componentDidMount() {
    this.fetchImages();
  }

  fetchImages = async () => {
    const { item } = this.props;

    this.setState({
      selectedImg: await getImage(item.images[0].sys.id),
    });
  };

  render() {
    const { selectedImg } = this.state;
    const { item } = this.props;
    console.log(item);
    return (
      <div className={styles.itemContainer}>
        <img className={styles.smallImg} src={selectedImg} alt="" />
        <p className={styles.itemText}>{item.name}</p>
        <p className={styles.itemText}>${item.price}</p>
      </div>
    );
  }
}
