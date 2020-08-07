import React from "react";

import Title from "../constants/Title";
import Questions from "../constants/Questions";
import styles from "../css/faq.module.css";

const Faq = () => {
  return (
    <div>
      <div className={styles.faqTitleWrapper}>
        <Title title="Frequently Asked Questions" />
      </div>
      <div className={styles.faqWrapper}>
        <div className={styles.faqSecondary}>
          <div className={styles.faqinfoWrapper}>
            {Questions.map((item, index) => {
              return (
                <article key={index}>
                  <h1>{item.section}</h1>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <p>{item.rain}</p>
                  <p>{item.wind}</p>
                  <p>{item.temp}</p>
                </article>
              );
            })}
            <h5>
              Still have a question? Call or Write us for more information.
              </h5>
              <h5>
                <a href="mailto: Southern.Ohio.Inflatables@gmail.com? subject=subject text">
                  e-mail: Southern.Ohio.Inflatables@gmail.com
                </a>
                </h5>
                <h5>
                <a href="tel:937-217-3440">Phone: 937-217-3440</a>
                </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Faq;
