import React from 'react'
import styles from '../css/banner.module.css'

 const Banner = ({title, children}) => {
    return (
        <div className={styles.banner}>
             <div className={styles.bannerHero}>
           {/* <h1>{title}</h1> */}
          
           
           </div>
           {children}
        </div>
    )
}
export default Banner