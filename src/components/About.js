import React from "react";
import styles from "../css/About.module.css";
import Title from "../constants/Title";
import SlideShow from "../components/SlideShow";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutCenter}>
        <div className={styles.itemsWrapper}>
          <Title title="Who We Are..." />
        </div>
        <article className={styles.aboutImgWrapper}>
          <div className={styles.imgContainer}>
            <SlideShow />
          </div>
          <div className={styles.paragraphContainer}>
            <p>
              We are a family owned and operated business that provides party
              rental services to the Ohio Valley Area. At Southern Ohio
              Inflatable's we pride ourselves in our product and our customer
              service. Your party or event is as important to us as it is you,
              which is why we strive to provide you with the most memorable
              experience possible.
            </p>
          </div>
        </article>
        <div className={styles.aboutInfo}>
        <a href="/Contact"><button>CONTACT US</button></a>
        </div>
      </div>
    </section>
  );
};
export default About;
