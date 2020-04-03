import React from 'react'
import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'
import Title from '../constants/Title'
import styles from "../css/items.module.css"


 const Contact = () => {
    return (
        <Layout>
             <div className={styles.itemsWrapper}>
           <Title title="Ask us a question..."/>
            <ContactForm/>
            </div>
        </Layout>
    )
}
export default Contact