import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "../../css/singleItems.module.css";
import { getImage } from "../../redux/managers/contentfulService";
import { Link, withRouter } from "react-router-dom";

class SingleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageLoaded: false,
      imgURL: null,
    };
  }

  componentDidMount() {
    this.fetchImage();
  }

  fetchImage = async () => {
    const { item } = this.props;
    // console.log(item);
    const imgURL = await getImage(item.images[0].sys.id);
    this.setState({
      imgURL,
    });
  };

  handleImageLoad = () => {
    this.setState({ imageLoaded: true });
  };
  render() {
    const { imgURL, imageLoaded } = this.state;
    const { item, dispatch, location } = this.props;
    const { name, price, slug, type, featured } = item;
    const path = featured
      ? `featured/${type}/${slug}`
      : `${location.pathname}/${type}/${slug}`;
    return (
      <article className={styles.singleItems}>
        <div className={styles.imgContainer}>
          {!imageLoaded && (
            <div className={styles.img}>
              <p>Loading...</p>
            </div>
          )}
          <Link to={path}>
            <img
              className={styles.img}
              style={imageLoaded ? {} : { display: "none" }}
              src={imgURL}
              onLoad={this.handleImageLoad}
              alt=""
            />
          </Link>

        </div>
        <div className={styles.footer}>
          <Link to={path} alt="">
          <h3>{name}</h3>
          </Link>
          <div className={styles.details}>
            <h5>price: ${price}</h5>
            {/* <button
              onClick={() => {
                dispatch(removeItem(item));
              }}
            >
             Details
            </button> */}
          </div>
        </div>
      </article>
    );
  }
}

export default withRouter(
  connect((state) => ({
    listState: state,
  }))(SingleItem)
);
