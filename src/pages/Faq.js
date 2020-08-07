import React from "react"

import Title from "../constants/Title"
import Questions from '../constants/Questions'
import styles from '../css/faq.module.css'

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
              </article>
            )
          })}
          </div>
        </div>
        </div>
        </div>
  )
}
export default Faq
