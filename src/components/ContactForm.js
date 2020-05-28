import React from "react"
import styles from "../css/contact.module.css"
const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.center}>
        <form
          action="https://formspree.io/mrgagzqd"
          method="POST"
          className={styles.form}
        >
          <div>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="john smith"
            />
          </div>
          <div>
            <input
            required
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="email@email.com"
            />
          </div>
          <div>
            <textarea
            required
              name="message"
              id="message"
              rows="12"
              className={styles.formControl}
              placeholder="Send us a detailed message and we will be pleased to assist you OR call us anytime at (937)217-3440."
            />
          </div>
        
          <div>
            <input
              type="submit"
              value="submit here"
              className={styles.submit}
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
