import React, { Component } from "react";
import { connect } from "react-redux";
import { getImage } from "../redux/managers/contentfulService";
import styles from '../css/template.module.css'

class ProductTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.appState.contentfulData[props.match.params.cat].filter(
        item => item.slug === props.match.params.id
      )[0],
      imgArray: []
    };
  }
  componentDidMount() {
    // console.log('wtf');
    this.fetchImages();
  }

  fetchImages = async () => {
    const { item } = this.state;
    let imgPromises = [];
    item.images.forEach(image => {
      return imgPromises.push(getImage(image.sys.id));
    });

    Promise.all(imgPromises)
      .then(res => {
        this.setState({
          imgArray: res
        });
      })
      .catch(err => console.log(err));
  };

  // To get name of array to look in use:
  // props.match.params.cat

  // To get slug of item use:
  // props.match.params.id
  render() {
    const { item, imgArray } = this.state;
    console.log(item);
    return (
      <div className={styles.templateWrapper}>
        {imgArray.map(img => {
          return <img src={img} alt="" />;
        })}
      </div>
    );
  }
}

export default connect(state => ({
  appState: state
}))(ProductTemplate);
