import React, { Component } from "react";
import { connect } from "react-redux";
import { getImage } from "../redux/managers/contentfulService";
import styles from "../css/template.module.css";
import AddToListButton from "../components/AddToListButton";

class ProductTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.appState.contentfulData[props.match.params.cat].filter(
        (item) => item.slug === props.match.params.id
      )[0],
      imgArray: [],
      selectedImg: null,
    };
  }
  componentDidMount() {
    // console.log('wtf');
    this.fetchImages();
  }

  fetchImages = async () => {
    const { item } = this.state;
    let imgPromises = [];
    item.images.forEach((image) => {
      return imgPromises.push(getImage(image.sys.id));
    });

    Promise.all(imgPromises)
      .then((res) => {
        this.setState({
          imgArray: res,
          selectedImg: res[0],
        });
      })
      .catch((err) => console.log(err));
  };

  // To get name of array to look in use:
  // props.match.params.cat

  // To get slug of item use:
  // props.match.params.id
  render() {
    const { imgArray, item, selectedImg } = this.state;

    console.log(item);
    return (
      <div className={styles.mainContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{item.name}</h1>
        </div>

        <div className={styles.mainRow}>
          <div className={styles.columnLeft}>
            <img className={styles.largeImg} src={selectedImg} alt="" />
            <div className={styles.imgWrapper}>
              {imgArray.map((img, index) => {
                return (
                  <img
                    className={styles.smallImg}
                    key={index}
                    src={img}
                    alt=""
                    onClick={() => {
                      this.setState({
                        selectedImg: img,
                      });
                    }}
                  />
                );
              })}
            </div>
          </div>
          <div className={styles.columnRight}>
            <h2>Specifications</h2>
            <p>{item.dim}</p>
            <p>{item.weight}</p>
            <p>{item.occ}</p>
            <p>{item.out}</p>
            <div className={styles.descContainer}>
              <h4>{item.description}</h4>
              <div className={styles.row}>
                <h4>${item.price}</h4>
                <AddToListButton />
              </div>
            </div>
          </div>
        </div>

        {/* <div className={styles.infoWrapper}>
          <h1>{item.name}</h1>
          <p>{item.dim}</p>
          <p>{item.weight}</p>
          <p>{item.occ}</p>
          <p>{item.out}</p>
          <p>{item.description}</p>
          <h3>${item.price}</h3>
        </div> */}
        {/* <div className={styles.mainImgWrap}>
          <div className={styles.imgWrapper}>
            {imgArray.map((img, index) => {
              return <img key={index} src={img} alt="" />;
            })}
          </div>
        </div> */}
      </div>
    );
  }
}

export default connect((state) => ({
  appState: state,
}))(ProductTemplate);
