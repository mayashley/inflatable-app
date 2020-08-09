import React from "react"
import { Slide } from "react-slideshow-image"
import styles from "../css/slideShow.module.css"
const img1 = require("../images/photos4.png")
const img2 = require("../images/photos3.png")
const img3 = require("../images/aboutImg.jpg")
const img4 = require('../images/photos2.png');
const img5 = require('../images/slideBryan.png');
const slideImages = [img1, img2, img3, img4, img5]

const properties = {
  duration: 5000,
  transitionDuration: 400,
  infinite: true,
  indicators: true,
  arrows: false,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    // console.log(`slide transition from {oldIndex} to {newIndex}`)
  },
}

const SlideShow = () => {
  // console.log(slideImages)
  return (
    <div className={styles.slideContainer}>
      <Slide {...properties}>
        <div className={styles.eachSlide}>
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
            {/* <span>Slide 1</span> */}
          </div>
        </div>
        <div className={styles.eachSlide}>
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            {/* <span>Slide 2</span> */}
          </div>
        </div>
        <div className={styles.eachSlide}>
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            {/* <span>Slide 3</span> */}
          </div>
        </div>
        <div className={styles.eachSlide}>
          <div style={{ backgroundImage: `url(${slideImages[3]})` }}>
            {/* <span>Slide 3</span> */}
          </div>
        </div>
        <div className={styles.eachSlide}>
          <div style={{ backgroundImage: `url(${slideImages[4]})` }}>
            {/* <span>Slide 3</span> */}
          </div>
        </div>
      </Slide>
    </div>
  )
}
export default SlideShow
