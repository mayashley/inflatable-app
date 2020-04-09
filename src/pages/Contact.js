import React from 'react'

import ContactForm from '../components/ContactForm'
import Title from '../constants/Title'
import styles from "../css/items.module.css"


 const Contact = () => {
    return (
       
             <div className={styles.itemsWrapper}>
           <Title title="Ask us a question..."/>
            <ContactForm/>
            </div>
      
    )
}
export default Contact